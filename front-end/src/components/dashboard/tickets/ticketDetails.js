import { Table } from "@mui/material";
import './ticket.css'





export default function TicketDetails({ticketData}){

    let {id, description, is_open, is_highPriority, ticket_type, comments, issued_date} = ticketData;
    
    return(
        <>
            <h1 style={{color:'#6c9886'}}>Ticket details</h1>
            <Table>
            <tbody className="ticket-info-table">
                <tr>
                    <td className="td-header">Ticket-Number:</td>
                    <td> {id}</td>
                </tr>
                <tr>
                    <td className="td-header">Ticket-Type:</td>
                    <td> {ticket_type}</td>
                </tr>
                <tr>
                    <td className="td-header">Status:</td>
                    <td> {is_open == true ? 'Open' : 'Closed'}</td>
                </tr>
                <tr>
                    <td className="td-header">Priority:</td>
                    <td> {is_highPriority == true ? 'High' : 'Low'}</td>
                </tr>
                <tr>
                    <td className="td-header">Created:</td>
                    <td> {issued_date}</td>
                </tr>
                <tr>
                    <td className="td-header">Description</td>
                    <td> {description}</td>
                </tr>
            </tbody>
            </Table>
        </>
    )

}