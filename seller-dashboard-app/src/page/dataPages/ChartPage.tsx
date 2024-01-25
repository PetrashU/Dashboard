import { useAppContext } from '../../AppContext';
import UnderConstruction from './component/UnderConstruction';

const ChartPage = () => {
  const { language, isDarkModeOn } = useAppContext();
  return (
    <div>
      <h1>
        {language === 'English' ? "ChartPage" : "Wykres"}
      </h1>
      <UnderConstruction />
      </div>
  )
}

export default ChartPage