import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'





export default function TicketTable({tickets}){
    

    

    
    return(
        <>
            <h3>Tickets</h3>
            <Table size="small">
                <TableHead>
                    <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell># Comments</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickets.map((ticket) => (
                        
                    <TableRow key={ticket.id}>
                        <TableCell>{ticket.issued_date}</TableCell>
                        <TableCell>{ticket.ticket_type}</TableCell>
                        <TableCell>{ticket.is_highPriority == true ? 'High' : 'Low'}</TableCell>
                        <TableCell>{ticket.is_open == true ? 'Open' : 'Closed'}</TableCell>
                        <TableCell>{(ticket.comments).length}</TableCell>
                        
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}