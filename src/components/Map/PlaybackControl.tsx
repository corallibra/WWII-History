import { useBattleStore } from '../../stores/useBattleStore'
import { routes } from '../../data/routes'
import { useEffect, useRef } from 'react'

const PlaybackControl = () => {
  const {
    currentStep,
    speed,
    activeRouteId,
    animationState,
    setCurrentStep,
    setSpeed,
    setActiveRouteId,
    setAnimationState,
    resetAnimation
  } = useBattleStore()

  const animationRef = useRef<number | null>(null)

  const currentRoute = routes.find((r) => r.id === activeRouteId)

  const play = () => {
    if (!currentRoute) return

    setAnimationState('playing')
  }

  const pause = () => {
    setAnimationState('paused')
  }

  const reset = () => {
    resetAnimation()
  }

  useEffect(() => {
    if (!currentRoute || animationState !== 'playing') {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      return
    }

    let lastTime = performance.now()
    let step = currentStep
    let stepProgress = 0

    const animate = (time: number) => {
      const delta = (time - lastTime) * speed
      lastTime = time

      stepProgress += delta

      if (step >= currentRoute.steps.length) {
        setAnimationState('completed')
        return
      }

      const currentStepData = currentRoute.steps[step]

      if (stepProgress >= currentStepData.duration) {
        stepProgress = 0
        step++
        setCurrentStep(step)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animationState, currentRoute, speed, currentStep, setCurrentStep, setAnimationState])

  return (
    <div className="bg-gray-800 border-t border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <select
            value={activeRouteId || ''}
            onChange={(e) => {
              setActiveRouteId(e.target.value || null)
              resetAnimation()
            }}
            className="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600"
          >
            <option value="">Select a route</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.nameKey}
              </option>
            ))}
          </select>

          <button
            onClick={animationState === 'playing' ? pause : play}
            disabled={!currentRoute}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-md transition-colors"
          >
            {animationState === 'playing' ? 'Pause' : 'Play'}
          </button>

          <button
            onClick={reset}
            disabled={!currentRoute}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 text-white rounded-md transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Speed:</span>
          <select
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value) as 0.5 | 1 | 2 | 3)}
            className="bg-gray-700 text-white px-4 py-2 rounded-md border border-gray-600"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={2}>2x</option>
            <option value={3}>3x</option>
          </select>
        </div>
      </div>

      {currentRoute && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-400 mb-1">
            <span>Step {currentStep + 1} of {currentRoute.steps.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${((currentStep + 1) / currentRoute.steps.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PlaybackControl
