import React ,{ useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dictionary = () => {

    let hskData = localStorage.getItem("HskData");
    hskData = JSON.parse(hskData);
    return (
        <div>
            <h1>Dictionary</h1>
            <table style={{backgroundColor:'white'}}>
                <tr>
                    <th>Hanzi</th>
                    <th>Pinyin</th>
                    <th>Translation 1</th>
                    <th>Translation 2</th>
                    <th>Translation 3</th>
                    <th>Hsk Level</th>
                </tr>
                {hskData.map((data) => (
                    <tr>
                        <td>{data.hanzi}</td>
                        <td>{data.pinyin}</td>
                        <td>{data.translation1}</td>
                        <td>{data.translation2}</td>
                        <td>{data.translation3}</td>
                        <td>{data.hskLevel}</td>
                    </tr>
                ))}
            </table>
        </div>     
    )
}

export default Dictionary;