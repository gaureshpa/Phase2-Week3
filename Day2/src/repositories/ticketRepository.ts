import pool from "../db/connection.js";
import { Ticket } from "../types.js";
import { db } from "../prisma/db";

export async function getTickets() {
    return await db.orm.public.Tickets
        .select("id", "title", "description", "priority", "status", "assignee", "createdAt")
        .all();
}

export async function getTicketById(id: number){
    return await db.orm.public.Tickets
        .select("id", "title", "description", "priority", "status", "assignee", "createdAt")
        .where({id})
        .first();
}

export async function createTicket(ticket: Omit<Ticket, "id">) {
    return await db.orm.public.Tickets.create({
        title: ticket.title,
        description: ticket.description,
        priority: ticket.priority,
        status: ticket.status,
        assignee: ticket.assignee
    });
}

export async function updateTicket(id: number, ticket: Omit<Ticket, "id">) {
    return await db.orm.public.Tickets
        .where({id})
        .update({
            title: ticket.title,
            description: ticket.description,
            priority: ticket.priority,
            status: ticket.status,
            assignee: ticket.assignee
        });
}

export async function deleteTicket(id: number){
    return await db.orm.public.Tickets
        .where({id})
        .delete();
}

