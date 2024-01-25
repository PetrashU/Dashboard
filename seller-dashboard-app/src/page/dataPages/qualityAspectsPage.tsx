import { useAppContext } from '../../AppContext';
import UnderConstruction from './component/UnderConstruction';

const QualityAspectsPage = () => {
  const { language } = useAppContext();
  return (
    <div>
      <h1>
        {language === 'English' ? "Quality Aspects" : "Jakość Sprzedaży"}
      </h1>
      <UnderConstruction />
    </div>

  )
}

export default QualityAspectsPage