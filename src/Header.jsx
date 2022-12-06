import './App.css';
import logo from "./components/assets/images/logo.png";

function Header(){
return(
<header className="header-content header">
<div className="logo-content">
    <img src={logo} alt="logo"/>
    <div>
        <span class="emp-text">EMPLOYEE</span>
        <span class="emp-text emp-payroll">PAYROLL</span>
    </div>
</div>
</header>
)
}
export default Header;