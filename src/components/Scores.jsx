
function Score ({CourseName , results}){
    return (
        <div class="scores">
          <h1>{CourseName}</h1>
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
                {results.map((results , index) => (
                    <tr key={index}>
                        <td>{results.firstName}</td>
                        <td>{results.lastName}</td>
                        <td>{results.score}</td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
    );
}
export default Score;