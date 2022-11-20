import {Table, TableBody, TableCell, TableHead, TableRow, Link} from '@mui/material'
import formatDate from '../../../util/utils'
import LaunchIcon from '@mui/icons-material/Launch';





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
                    <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickets.map((ticket) => (
                    
                        <TableRow key={ticket.id}>
                            
                            <TableCell>{formatDate(ticket.issued_date)}</TableCell>
                            <TableCell>{ticket.ticket_type}</TableCell>
                            <TableCell>{ticket.is_highPriority == true ? 'High' : 'Low'}</TableCell>
                            <TableCell>{ticket.is_open == true ? 'Open' : 'Closed'}</TableCell>
                            <TableCell>
                                <Link href={`/ticket/${ticket.id}`}>
                                    <LaunchIcon/>
                                </Link>
                            </TableCell>
                            
                        </TableRow>
                    
                    ))}
                </TableBody>
            </Table>
        </>
    )
}