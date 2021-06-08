import React from 'react';

const ReportTable = ({reportData}) => {

    const reports = [
        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },
        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },
        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },
        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },
        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },

        {
            OrderNo : 'MP-105',
            ProductNo : '#A580',
            ReportedDate : '22 June 2020',
            OrderDate : '18 June 2020' ,
            Report : 'Download From Here'
        },
       
    ]

    // const [reportData, setreportData] = useState([]);

    // useEffect(() => {
    //     Axios.get('http://localhost:8080/qc/reports').then((response) => {
    //         setreportData(response.data[0]);
    //     });
    //   } , []);

    //   console.log(reportData);
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr> 
                        <th> Sl No</th> 
                        <th>Order No</th>
                        <th>Product No</th>
                        <th>Order Date</th>
                        <th >Reporte Date</th>
                        <th style={{textAlign:'center'}}>Report</th>
                        
                    </tr>
                </thead>
                <tbody>

    {
        reportData.map( (report , index) => 
            <tr>
                <td> {index + 1} </td>
                <td>{report.OID}</td>
                <td>{report.PID}</td>
                <td>{report.OrderDate}</td>
                <td> {report.OrderStatus === 'processing' ? "pending" : "Done" } </td>
                <td> {report.OrderStatus === 'processing' ? "Not Done Yet" : <a> Download From Here </a> } </td>

            </tr>
                       
     )}

                </tbody>
            </table>
        </div>
    );
};

export default ReportTable;
