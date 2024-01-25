import { useEffect} from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { changeAcc, logout } from '../../redux/reducer/authSlice';
import { RootState } from '../../redux/store/store';
import { useAppContext } from '../../AppContext';

const Navbar = () => {
    const { isAuthenticated, profiles, user } = useSelector((state: RootState) => {
        return state.auth;
    })
    const {language, isDarkModeOn, toggleLanguage, toggleMode} = useAppContext();
    const dispatch = useDispatch();

    const nav = useNavigate();
    const dropdownLang: Record<string,string[]> = {
        English: ['Polish'],
        Polish: ['Angielski'],
    };

    useEffect(() => {
        if (!isAuthenticated) {
            nav("/")
        }
    }, [isAuthenticated, nav])

    const handleLogout = () => {
        dispatch(logout())
    }

    const handleModeChange = () => {
        toggleMode();
    }

    const handleLanguageChange = () => {
        toggleLanguage();
    }
    const handleAccountChange = (acc : string) => {
        dispatch(changeAcc(acc))
    }

    return (
        <div className={isDarkModeOn ? 'navbar-darker' : 'navbar'}>
            <div className='left-side-nav'>
                <p className='logged-user'>{user}</p>
                <Dropdown
                    dropdownContent={profiles}
                    dropdownTitle={language === 'English' ? 'Account' : 'Konto'}
                    onHandleLangChange={handleLanguageChange}
                    onHandleAccChange={handleAccountChange}
                    dropdownType="accChange"
                />
                <Dropdown
                    dropdownContent={dropdownLang[language]}
                    dropdownTitle={language === 'English' ? 'Language' : 'Język'}
                    onHandleLangChange={handleLanguageChange}
                    onHandleAccChange={handleAccountChange}
                    dropdownType="langChange"
                />
            </div>
            <div className='right-side-nav'>
                <button className="mode-toggle" onClick={handleModeChange}>
                    {isDarkModeOn ? '☽' : '☼'}
                </button>
                <button onClick={handleLogout} className='logout-button'>
                    {language === 'English' ? 'Log out' : 'Wyloguj'}
                </button>
            </div>
        </div>
    )
}

export default Navbar