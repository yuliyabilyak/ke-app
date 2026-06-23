import { useReducer } from 'react'
import { questions } from './data/questions'
import { Card, CardContent, CardHeader, CardFooter } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'

// ── Session builder ────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildSession(level) {
  const pool = questions.filter((q) => q.level === level)
  const byCategory = {}
  for (const q of pool) {
    if (!byCategory[q.category]) byCategory[q.category] = []
    byCategory[q.category].push(q)
  }
  const categories = shuffle(Object.keys(byCategory))
  for (const cat of categories) byCategory[cat] = shuffle(byCategory[cat])

  const sessionLength = 21 + Math.floor(Math.random() * 5)
  const selected = []
  const pointers = Object.fromEntries(categories.map((c) => [c, 0]))
  let catIdx = 0
  let safety = 0
  while (selected.length < sessionLength && safety < sessionLength * categories.length) {
    const cat = categories[catIdx % categories.length]
    if (pointers[cat] < byCategory[cat].length) {
      selected.push(byCategory[cat][pointers[cat]])
      pointers[cat]++
    }
    catIdx++
    safety++
  }

  const selectedIds = new Set(selected.map((q) => q.id))
  return {
    sessionQuestions: shuffle(selected),
    availablePool: shuffle(pool.filter((q) => !selectedIds.has(q.id))),
  }
}

// ── State ──────────────────────────────────────────────────────────────────────

const INITIAL_STATE = {
  screen: 'start',
  level: null,
  sessionQuestions: [],
  availablePool: [],
  currentIndex: 0,
  revealed: false,
  ratings: {},
  bookmarks: {},
  changesRemaining: 3,
}

function reducer(state, action) {
  switch (action.type) {
    case 'START':
      return {
        ...INITIAL_STATE,
        screen: 'quiz',
        level: action.level,
        sessionQuestions: action.sessionQuestions,
        availablePool: action.availablePool,
      }

    case 'REVEAL':
      return { ...state, revealed: true }

    case 'RATE':
      // Save rating only — navigation is explicit via NEXT / PREV / GOTO
      return { ...state, ratings: { ...state.ratings, [action.id]: action.rating } }

    case 'NEXT':
      return {
        ...state,
        currentIndex: Math.min(state.currentIndex + 1, state.sessionQuestions.length - 1),
        revealed: false,
      }

    case 'PREV':
      return {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
        revealed: false,
      }

    case 'GOTO':
      return { ...state, currentIndex: action.index, revealed: false }

    case 'FINISH':
      return { ...state, screen: 'summary' }

    case 'BOOKMARK': {
      const bookmarks = { ...state.bookmarks }
      if (bookmarks[action.id]) delete bookmarks[action.id]
      else bookmarks[action.id] = true
      return { ...state, bookmarks }
    }

    case 'CHANGE': {
      const newSession = [...state.sessionQuestions]
      newSession[state.currentIndex] = action.replacement
      return {
        ...state,
        sessionQuestions: newSession,
        availablePool: state.availablePool.filter((q) => q.id !== action.replacement.id),
        changesRemaining: state.changesRemaining - 1,
        revealed: false,
      }
    }

    case 'RESTART':
      return { ...INITIAL_STATE }

    default:
      return state
  }
}

// ── Helpers ────────────────────────────────────────────────────────────────────

const RATING_META = {
  good:    { label: '✅ Good',    variant: 'good',    btnVariant: 'green' },
  neutral: { label: '➖ Neutral', variant: 'neutral', btnVariant: 'gray'  },
  bad:     { label: '❌ Bad',     variant: 'bad',     btnVariant: 'red'   },
}

function exportCSV(sessionQuestions, ratings, bookmarks) {
  const rows = [
    ['Category', 'Question', 'Rating', 'Saved for Later'],
    ...sessionQuestions.map((q) => [
      `"${q.category}"`,
      `"${q.question.replace(/"/g, '""')}"`,
      ratings[q.id] ?? 'unrated',
      bookmarks[q.id] ? 'yes' : 'no',
    ]),
  ]
  const csv = rows.map((r) => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'knowledge-evaluation.csv'
  a.click()
  URL.revokeObjectURL(url)
}

// ── Start Screen ───────────────────────────────────────────────────────────────

const LEVEL_META = {
  Middle: {
    description: 'Core QA concepts, test design, and practical process knowledge.',
    color: 'border-amber-200 hover:border-amber-400 hover:bg-amber-50',
    badge: 'middle',
  },
  Senior: {
    description: 'Strategy, architecture, risk analysis, and quality leadership.',
    color: 'border-purple-200 hover:border-purple-400 hover:bg-purple-50',
    badge: 'senior',
  },
}

function StartScreen({ dispatch }) {
  const levels = Object.keys(LEVEL_META)
  const countByLevel = Object.fromEntries(
    levels.map((l) => [l, questions.filter((q) => q.level === l).length])
  )

  function handleStart(level) {
    const { sessionQuestions, availablePool } = buildSession(level)
    dispatch({ type: 'START', level, sessionQuestions, availablePool })
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">Select your level</h2>
        <p className="text-sm text-gray-500 mt-1">
          Each session draws 21–25 questions randomly, covering at least 5 topic areas.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {levels.map((level) => {
          const meta = LEVEL_META[level]
          return (
            <button
              key={level}
              onClick={() => handleStart(level)}
              className={`text-left rounded-xl border-2 bg-white p-6 transition-colors cursor-pointer ${meta.color}`}
            >
              <Badge variant={meta.badge} className="mb-3">{level}</Badge>
              <p className="font-semibold text-gray-900 mb-1">{level} QA</p>
              <p className="text-sm text-gray-500 leading-snug">{meta.description}</p>
              <p className="text-xs text-gray-400 mt-3">{countByLevel[level]} questions in pool</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Progress Dots ──────────────────────────────────────────────────────────────

function ProgressDots({ sessionQuestions, ratings, bookmarks, currentIndex, dispatch }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {sessionQuestions.map((q, i) => {
        const rating = ratings[q.id]
        const isCurrent = i === currentIndex
        const isBookmarked = !!bookmarks[q.id]

        let bg = 'bg-white'
        let border = isBookmarked ? 'border-amber-300' : 'border-gray-200'
        if (rating === 'good')    { bg = 'bg-green-400'; border = isBookmarked ? 'border-amber-400' : 'border-green-500' }
        if (rating === 'neutral') { bg = 'bg-gray-300';  border = isBookmarked ? 'border-amber-400' : 'border-gray-400' }
        if (rating === 'bad')     { bg = 'bg-red-400';   border = isBookmarked ? 'border-amber-400' : 'border-red-500' }

        return (
          <button
            key={q.id}
            onClick={() => dispatch({ type: 'GOTO', index: i })}
            title={`Q${i + 1}${rating ? ` · ${rating}` : ''}${isBookmarked ? ' · saved' : ''}`}
            className={`
              rounded-full border-2 transition-all cursor-pointer
              ${bg} ${border}
              ${isCurrent ? 'w-4 h-4 scale-125 shadow-sm' : 'w-3 h-3 hover:scale-110'}
            `}
          />
        )
      })}
    </div>
  )
}

// ── Quiz Screen ────────────────────────────────────────────────────────────────

function QuizScreen({ state, dispatch }) {
  const { sessionQuestions, currentIndex, ratings, bookmarks, revealed, availablePool, changesRemaining } = state
  const question = sessionQuestions[currentIndex]
  const total = sessionQuestions.length
  const ratedCount = Object.keys(ratings).length
  const currentRating = ratings[question.id]
  const isBookmarked = !!bookmarks[question.id]
  const canChange = changesRemaining > 0 && availablePool.length > 0

  // Auto-show answer for questions that were already rated
  const showAnswer = revealed || !!currentRating

  const isFirst = currentIndex === 0
  const isLast = currentIndex === total - 1

  function handleChange() {
    if (!canChange) return
    const idx = Math.floor(Math.random() * availablePool.length)
    dispatch({ type: 'CHANGE', replacement: availablePool[idx] })
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Progress header */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center text-sm">
          <span className="font-medium text-gray-700">
            Question {currentIndex + 1} of {total}
          </span>
          <span className="text-gray-400">
            {ratedCount} of {total} rated
          </span>
        </div>
        <ProgressDots
          sessionQuestions={sessionQuestions}
          ratings={ratings}
          bookmarks={bookmarks}
          currentIndex={currentIndex}
          dispatch={dispatch}
        />
      </div>

      {/* Question card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mr-1">
                Question
              </p>
              <Badge variant="category">{question.category}</Badge>
              <Badge variant={question.level.toLowerCase()}>{question.level}</Badge>
            </div>

            <div className="flex items-center gap-2">
              {/* Bookmark */}
              <button
                onClick={() => dispatch({ type: 'BOOKMARK', id: question.id })}
                title={isBookmarked ? 'Remove bookmark' : 'Save for later'}
                className={`text-base leading-none rounded-md px-2 py-1.5 border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'border-amber-300 bg-amber-50 text-amber-500'
                    : 'border-gray-200 text-gray-300 hover:border-amber-300 hover:text-amber-400'
                }`}
              >
                🔖
              </button>

              {/* Change question */}
              {!showAnswer && (
                <button
                  onClick={handleChange}
                  disabled={!canChange}
                  title={canChange ? 'Replace with a different question' : 'No changes remaining'}
                  className={`flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-1.5 border transition-colors ${
                    canChange
                      ? 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-700 cursor-pointer'
                      : 'border-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <span>↺</span>
                  <span>Change ({changesRemaining} left)</span>
                </button>
              )}
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-900 leading-snug mt-2">
            {question.question}
          </h2>
        </CardHeader>

        <CardContent>
          {/* Answer area */}
          <div className="mb-4">
            {!showAnswer ? (
              <Button
                variant="outline"
                onClick={() => dispatch({ type: 'REVEAL' })}
                className="w-full"
              >
                Reveal Answer
              </Button>
            ) : (
              <div
                className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-gray-700 text-sm leading-relaxed"
                style={!currentRating ? { animation: 'fadeSlideIn 0.25s ease forwards' } : undefined}
              >
                {question.answer}
              </div>
            )}
          </div>

          {/* Assessment buttons — shown once answer is visible */}
          {showAnswer && (
            <div
              className="flex gap-3"
              style={!currentRating ? { animation: 'fadeSlideIn 0.2s ease forwards' } : undefined}
            >
              {Object.entries(RATING_META).map(([key, meta]) => (
                <Button
                  key={key}
                  variant={currentRating === key ? meta.btnVariant : 'outline'}
                  className={`flex-1 ${currentRating && currentRating !== key ? 'opacity-40' : ''}`}
                  onClick={() => dispatch({ type: 'RATE', id: question.id, rating: key })}
                >
                  {meta.label}
                </Button>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <Button
          variant="outline"
          size="sm"
          disabled={isFirst}
          onClick={() => dispatch({ type: 'PREV' })}
          className={isFirst ? 'opacity-30' : ''}
        >
          ← Prev
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch({ type: 'FINISH' })}
          className="text-gray-400 hover:text-gray-700 text-xs"
        >
          Finish Session
        </Button>

        <Button
          variant="outline"
          size="sm"
          disabled={isLast}
          onClick={() => dispatch({ type: 'NEXT' })}
          className={isLast ? 'opacity-30' : ''}
        >
          Next →
        </Button>
      </div>
    </div>
  )
}

// ── Summary Screen ─────────────────────────────────────────────────────────────

function SummaryScreen({ state, dispatch }) {
  const { sessionQuestions, ratings, bookmarks } = state

  const counts = { good: 0, neutral: 0, bad: 0 }
  for (const q of sessionQuestions) {
    const r = ratings[q.id]
    if (r) counts[r]++
  }
  const bookmarkCount = Object.keys(bookmarks).length

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Session Complete</h2>
          <p className="text-sm text-gray-500 mt-1">
            {sessionQuestions.length} questions · <Badge variant={state.level.toLowerCase()}>{state.level}</Badge>
          </p>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          <Badge variant="good">{counts.good} Good</Badge>
          <Badge variant="neutral">{counts.neutral} Neutral</Badge>
          <Badge variant="bad">{counts.bad} Bad</Badge>
          {bookmarkCount > 0 && <Badge variant="default">🔖 {bookmarkCount} Saved</Badge>}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold uppercase tracking-wide text-gray-400 px-5 py-3 w-36">
                    Category
                  </th>
                  <th className="text-left text-xs font-semibold uppercase tracking-wide text-gray-400 px-5 py-3">
                    Question
                  </th>
                  <th className="text-left text-xs font-semibold uppercase tracking-wide text-gray-400 px-5 py-3 w-24">
                    Rating
                  </th>
                  <th className="text-center text-xs font-semibold uppercase tracking-wide text-gray-400 px-3 py-3 w-12">
                    Later
                  </th>
                </tr>
              </thead>
              <tbody>
                {sessionQuestions.map((q, i) => {
                  const rating = ratings[q.id] ?? 'unrated'
                  const meta = RATING_META[rating]
                  return (
                    <tr
                      key={q.id}
                      className={i < sessionQuestions.length - 1 ? 'border-b border-gray-50' : ''}
                    >
                      <td className="px-5 py-3">
                        <Badge variant="category" className="whitespace-nowrap text-xs">{q.category}</Badge>
                      </td>
                      <td className="px-5 py-3 text-gray-700 leading-snug">{q.question}</td>
                      <td className="px-5 py-3">
                        {meta ? (
                          <Badge variant={meta.variant}>{meta.label}</Badge>
                        ) : (
                          <Badge variant="default">—</Badge>
                        )}
                      </td>
                      <td className="px-3 py-3 text-center text-base">
                        {bookmarks[q.id] ? '🔖' : ''}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
        <CardFooter className="flex gap-3 border-t border-gray-100 pt-4">
          <Button variant="outline" onClick={() => exportCSV(sessionQuestions, ratings, bookmarks)}>
            Export CSV
          </Button>
          <Button onClick={() => dispatch({ type: 'RESTART' })}>Restart</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

// ── Root ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Knowledge Evaluation
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Review each question, reveal the answer, and assess your confidence.
            </p>
          </header>

          {state.screen === 'start'   && <StartScreen dispatch={dispatch} />}
          {state.screen === 'quiz'    && <QuizScreen state={state} dispatch={dispatch} />}
          {state.screen === 'summary' && <SummaryScreen state={state} dispatch={dispatch} />}
        </div>
      </div>
    </>
  )
}
