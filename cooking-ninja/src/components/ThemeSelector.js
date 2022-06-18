
import './ThemeSelector.css';
import { useTheme } from './Hooks/useTheme';
import modeIcon from '../assets/sun.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode} = useTheme();
    const toggleHandler = () => {
        changeMode(mode === 'dark'? 'light' : 'dark');
    }
    console.log(mode);
    return (
        <div className='theme-selector'>
            <div className='mode-toggle'>
                <img 
                src={modeIcon}
                onClick={toggleHandler} 
                alt="dark/light toggle icon"
                style={{filter: mode === 'dark'? 'invert(100%)' : 'Invert(20%)'}}
                />
            </div>
            <div className='theme-buttons'>
            {themeColors.map(color => 
                <div 
                key = {color}
                onClick = {() => changeColor(color)}
                style={{background: color}}
                />)}
            </div>
        </div>
    )
}