import { Client } from "@notionhq/client";

export default async (req, res) => {
    const notion = new Client ({auth: process.env.NOTION_TOKEN});
    
    if (req.method === 'POST') {
        // TODO:handle POST
    } else {
        const database = await notion.databases.query({ database_id: process.env.NOTION_USERS_KEY});
        const users = [];
    
        database.results.map(row => {
            users.push({
                id : row.id,
                autoId: row?.properties?.autoId?.number,
                title: row?.properties?.userId?.title[0]?.text?.content,
                referredBy: row?.properties?.referredBy?.rich_text[0]?.text?.content,
                firstName: row?.properties?.firstName?.rich_text[0]?.text?.content,
                lastName: row?.properties?.lastName?.rich_text[0]?.text?.content,
                initials: row?.properties?.initials?.rich_text[0]?.text?.content,
                contactNo: row?.properties?.contactNo?.rich_text[0]?.text?.content,
                email: row?.properties?.email?.email,
                paymentProvider: row?.properties?.paymentProvider?.relation[0]?.id,
                accountNumber: row?.properties?.accountNumber?.rich_text[0]?.text?.content,
                accountName: row?.properties?.accountName?.rich_text[0]?.text?.content,
                accountType: row?.properties?.accountType?.select?.name,
                isAdmin: row?.properties?.isAdmin?.select?.name,
                wiseAccount: row?.properties?.wiseAccount?.email,
                agreementDate: row?.properties?.agreementDate?.date?.start,
                openChatLink: row?.properties?.openChatLink?.formula?.string,
                userProfileLink: row?.properties?.userProfileLink?.select?.string,
                password: row?.properties?.password?.formula?.string
            });
        });

        return {
            users: users
        }
    }
}