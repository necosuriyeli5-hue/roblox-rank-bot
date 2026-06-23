const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const GROUP_ID = process.env.11336933;
const API_KEY = process.env.IDGEe/oqTkGOz+yAIyJ8z6SFdDik2SxvDLSAIipBkRgV+Al9ZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWtsRVIwVmxMMjl4Vkd0SFQzb3JlVUZKZVVvNGVqWlRSbVJFYVdzeVUzaDJSRXhUUVVscGNFSnJVbWRXSzBGc09TSXNJbTkzYm1WeVNXUWlPaUl4TVRFMk5qVXpNRFV5TVNJc0ltVjRjQ0k2TVRjNE1qSXpPVEEwTkN3aWFXRjBJam94TnpneU1qTTFORFEwTENKdVltWWlPakUzT0RJeU16VTBORFI5LkxRYjlSdWlMOGhQRnl1azRKVmN4cjlhSzFaeVM0bzBFYXZPWUtxazB0MDNnd1UyRDFjd2c5NTdMSzdNSFhfSEVhR2dUSW1vLVRCLTlidnU5bHRyZnBSTHpyNzhqQnNYalBPNWZKV1hRM3RNVzNDeU1lZmFuZGxlQ2NLV1pJc3oxSUdCNkczTDJGaUFvYUd2UUprLVFYQ0V5SVVKb0N1ZU1kUGhsYWR1ZHo4d1hlZDVWaTdiU3VqSV9jemdvbWIzeDVvTWxOVXpnaDUzWlRNTXpfWU9kNWI0WWMtSHNLdFFkOXIzTXVzN3M2cDFLZHdEWVl5MGt1ODVyUURIU3NaczE0MjJOZGZ4aXB1NDJqZS1rc3lweDlvR0tsdWY0NnVSQ1Nkc1VaWnhMaGtTNDdmcHpNbGRNX0xTcTgwSHhwS1k2c1VoeWdwamtKNFFKX2NsS0dWYl9OZw==;

async function getUserId(username) {
    const res = await axios.post("https://users.roblox.com/v1/usernames/users", {
        usernames: [username],
        excludeBannedUsers: true
    });

    return res.data.data[0].id;
}

async function getRank(userId) {
    const res = await axios.get(
        `https://groups.roblox.com/v1/groups/${GROUP_ID}/users/${userId}`
    );

    return res.data.role.rank;
}

async function setRank(userId, rank) {
    await axios.patch(
        `https://apis.roblox.com/cloud/v2/groups/${GROUP_ID}/memberships/${userId}`,
        {
            roleId: rank
        },
        {
            headers: {
                "x-api-key": API_KEY
            }
        }
    );
}

app.post("/terfi", async (req, res) => {
    const userId = await getUserId(req.body.username);
    const rank = await getRank(userId);

    await setRank(userId, rank + 1);

    res.json({ ok: true });
});

app.post("/tenzil", async (req, res) => {
    const userId = await getUserId(req.body.username);
    const rank = await getRank(userId);

    await setRank(userId, rank - 1);

    res.json({ ok: true });
});

app.listen(3000, () => console.log("Bot çalışıyor"));
