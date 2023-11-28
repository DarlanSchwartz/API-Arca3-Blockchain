interface PvtKeyDb {
    [key: string]: string;
}

const pvtKeyDb: PvtKeyDb = {
        "user1": "pvtKey1",
        "user2": "pvtKey2",
        "user3": "pvtKey3",
        "user4": "pvtKey4"
}

export const getPrivateKey = (username: string) => {
        return pvtKeyDb[username];
}