import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsScroll, setThreshold } from '../features/scrollDown'

export const handleScroll = (threshold) => {
  const { isScroll } = useSelector(state => state.scroll)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setThreshold(threshold))

    const handleScroll = () => {
      dispatch(setIsScroll())
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isScroll
}
