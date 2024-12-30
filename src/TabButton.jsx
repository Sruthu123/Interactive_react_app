export default function TabButton({ children , onSelect, isSelected}) {
    
    return (
        <li>
            <button className='active' onClick={ onSelect}>{children}</button>
        </li>
    );
}


