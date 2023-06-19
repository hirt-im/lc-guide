import './ProblemList.css';
import { problems } from '../data/problems';

export default function ProblemList(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>Problem</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                </tr>
                <tr>
                    <td>Data 3</td>
                    <td>Data 4</td>
                </tr>
            {/* Add more rows as needed */}
            </tbody>
        </table>
    );
}