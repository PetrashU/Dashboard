import { useAppContext } from '../../AppContext';

const ChartPage = () => {
  const {language, isDarkModeOn} = useAppContext();
  return (
    <div>ChartPage</div>
  )
}

export default ChartPage