import React , {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50,

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:'#3f51b5'
  }
}));

export default function AllCountries() 
{
  const [globalData,setglobalData] = useState({});
  useEffect(()=>{

    async function getdata(){
                    const  response = await  fetch("https://api.covid19api.com/summary")
                    const data = await response.json();
                    setglobalData(Object.values(Object.values(data.Countries)))
                    //console.log(Object.values(Object.values(data.Countries)));
                    //delete data.result[0].source  you could dete any thing with this method 
                   
        }
        getdata();

                          
                  
                  },[])


const classes = useStyles();

return (
  <div className={classes.root}>

      <table>
        <tr><td>Counties</td><td>TotalConfirmed</td><td>TotalRecovered</td><td>Data</td></tr>
        <hr/>
              { 
                 Object.keys(globalData).map((key,ind)=>
                  {
                        return (
                          <tr>
                              <td>
                                {globalData[key]['Country']}
                              </td>
                              <td>
                              {globalData[key]['TotalConfirmed']}
                              </td>


                              <td>
                                 {globalData[key]['TotalRecovered']}
                              </td>

                              <td>
                                 {globalData[key]['Date']}
                              </td>

                          </tr> 

                              )

                  }
                )
              }
          </table>
  </div>
);

}
