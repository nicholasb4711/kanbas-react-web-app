function KanbasNavigation() {
    return (`
<div class="col-2-nav">
    <ul class="list-group wd-kanbas-navigation">
        <a href="/Kanbas/Account/index.html"></a>
        <img src="/images/NU_Logo.png">
            <li class="list-group-item">
                <a href="/Kanbas/Account/index.html">
                    <i class="fas fa-user-circle menu-icon" style="color: lightgray;"></i>
                    <br>
                        Account
                </a>
                <li class="list-group-item">
                    <a href="/Kanbas/Dashboard/index.html">
                        <i class="fas fa-tachometer-alt menu-icon" style="color: #D41B2C;"></i>
                        <br>
                            Dashboard
                    </a>
                </li>
                <li class="list-group-item">
                    <a href="/Kanbas/Courses/CS4550/Home/home.html">
                        <i class="fas fa-book menu-icon" style="color: #D41B2C;"></i>
                    </br>
                    Courses</a>
            </li>
            <li class="list-group-item">
                <a href="#">
                    <i class="far fa-calendar-alt menu-icon" style="color: #D41B2C;"></i>
                    <br>
                        Calendar</a>
            </li>
            <li class="list-group-item">
                <a href="#">
                    <i class="fas fa-inbox menu-icon" style="color: #D41B2C;"></i>
                    <br>
                        Inbox</a>
            </li>
            <li class="list-group-item">
                <a href="#">
                    <i class="fas fa-history menu-icon" style="color: #D41B2C;"></i>
                    <br>
                        History</a>
            </li>
            <li class="list-group-item">
                <a href="#">
                    <i class="fas fa-network-wired menu-icon" style="color: #D41B2C;"></i>
                    <br>
                        Studio</a>
            </li>
            <li class="list-group-item"><a href="#">Commons</a></li>
            <li class="list-group-item">
                <a href="#">
                    <i class="far fa-question-circle menu-icon" style="color: #D41B2C;"></i>
                    <br>Help</a>
            </li>
    </ul>
</div>`);
}

export default KanbasNavigation;
