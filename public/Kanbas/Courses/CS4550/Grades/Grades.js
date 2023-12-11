import Home from "/Kanbas/Home/Home.js";


function Grades() {
return (`
${Home()}
<div class="container">
<div class="search-row d-flex ">
    <div class="d-flex flex-column col-6 m-3">
        <h3>Student Names</h3>
        <input class="form-control" type="text" placeholder="Search Students"
            title="Type the usernames of students you want to filter" />
    </div>
    <div class="d-flex flex-column col-6 m-3">
        <h3>Assignment Names</h3>
        <input class="form-control" type="text" placeholder="Search Assignments"
            title="Type the name of the assignment you want to filter" />
    </div>
</div>
<hr />
<div class="filters-row d-flex">
    <div class="d-flex flex-column m-3">
        <button class="btn-secondary btn-apply-filters">
            <i class="fas fa-filter fa-lg"
                style="color: #9c9c9c; margin-right: 9px;"></i>Apply Filters
        </button>
    </div>
    
</div>
<div class="table-responsive m-3">
    <table class="table table-striped table-hover table-bordered" width="100%" border="1">
        <thead>
            <tr>
                <th>Student Name</th>
                <th>A1 - HTML</th>
                <th>A2 - CSS</th>
                <th>A3 - JS</th>
                <th>A4 - PHP</th>
            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr>
                <td>
                    <p class="student-name">John Doe</p></td>
                <td>100%</td>
                <td>
                    <input class="form-control" type="number" placeholder="100" value="100" />
                </td>
                <td>100%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">Jane Doe</p></td>
                <td><input class="form-control" type="number" placeholder="100" value="100" /></td>
                <td>100%</td>
                <td>100%</td>
                <td><input class="form-control" type="number" placeholder="100" value="100" /></td>
            </tr>
            <tr>
                <td><p class="student-name">Jane Smith</p></td>
                <td>100%</td>
                <td>100%</td>
                <td><input class="form-control" type="number" placeholder="100" value="100" /></td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">James Bond</p></td>
                <td>100%</td>
                <td>100%</td>
                <td><input class="form-control" type="number" placeholder="100" value="100" /></td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">Lebron James</p></td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">Jack Frost</p></td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">Julianna Julianne</p></td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
            </tr>
            <tr>
                <td><p class="student-name">Jenny from Forrest Gump</p></td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</div>

</div>`);
}

export default Grades;