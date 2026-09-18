import pool from "../db/connection.js";
import { Ticket } from "../types.js";

export async function getTickets(): Promise<Ticket[]> {
    const result = await pool.query("SELECT * FROM tickets");
    return result.rows;
}

export async function getTicketById(id: number): Promise<Ticket | undefined> {
    const result = await pool.query(
        "SELECT * FROM tickets WHERE id = $1",
        [id]
    );

    return result.rows[0];
}

export async function createTicket(ticket: Omit<Ticket, "id">): Promise<Ticket> {
    const result = await pool.query(
        `INSERT INTO tickets (title, description, priority, status, assignee)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [
            ticket.title,
            ticket.description,
            ticket.priority,
            ticket.status,
            ticket.assignee
        ]
    );
    
    return result.rows[0];
}

export async function updateTicket(id: number, ticket: Omit<Ticket, "id">): Promise<Ticket | undefined> {
    const result = await pool.query(
        `UPDATE tickets 
        SET title = $1,
            description = $2,
            priority = $3,
            status = $4,
            assignee = $5
        WHERE id = $6
        RETURNING *`,
        [
            ticket.title,
            ticket.description,
            ticket.priority,
            ticket.status,
            ticket.assignee,
            id
        ]
    );

    return result.rows[0];
} 

export async function deleteTicket(id: number): Promise<Ticket | undefined> {
    const result = await pool.query(
        `DELETE FROM tickets
        WHERE id = $1
        RETURNING *`,
        [id]
    );

    return result.rows[0];
}

