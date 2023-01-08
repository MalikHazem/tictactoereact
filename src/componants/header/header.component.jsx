import './header.css';
const Header = (props) => {

    return (
        <div className="header">
            <span>x: {props.wins.xwins}</span>
            <span>o: {props.wins.owins}</span>
            <span>{props.turn} Turn</span>
        </div>
    );
};

export default Header