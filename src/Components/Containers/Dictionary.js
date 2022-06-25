import React ,{ useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dictionary = () => {
    const [currentHskData, setCurrentHskData] = React.useState([]);

    var hskDictionaryLevel = window.location.href.substring(window.location.href.length - 1, window.location.href.length);
    useEffect(() => {

        function setData(data) {
          const storageCheck = localStorage.getItem("HskData" + hskDictionaryLevel);
          setCurrentHskData(data);
          if(!storageCheck) {
            localStorage.setItem("HskData" + hskDictionaryLevel, JSON.stringify(data));
          }
          
        }
        async function fetchData() {
            fetch("https://hskapi20220623180039.azurewebsites.net/api/hskdetails/HskByLevel/" + hskDictionaryLevel)
            .then(r => r.json())
            .then(data => setData(data))
        }
        fetchData();
        
        
    }, [])
    let hskData = [];
    hskData = localStorage.getItem("HskData" + hskDictionaryLevel);
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
                {currentHskData.map((data) => (
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