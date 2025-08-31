async function main() {
    const MongoClient = require('mongodb').MongoClient;
    const uri =
        'mongodb+srv://hackathon_user:sanatan108@cluster0.k4nr9w0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(uri);
    console.log('Connecting to MongoDB...');
    await client.connect();
    await findListings(client, 5);
    await client.close();
}
main().catch(console.error);


async function findListings(client, resultsLimit) {
    const cursor = client
        .db('hackathon-team')
        .collection('students')
        .find()
        .limit(resultsLimit);

    const results = await cursor.toArray();
    if (results.length > 0) {
        console.log(`Found ${results.length} listing(s):`);
        results.forEach((result, i) => {
            date = new Date(result.createdAt).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   Roll no: ${result.rollNo}`);
            console.log(`   whatsapp: ${result.whatsapp}`);
            console.log(
                `   most recent review date: ${new Date(
                    result.updatedAt
                ).toDateString()}`
            );
            const skills = Array.isArray(result.skills) ? result.skills : [];
            skills.forEach((skill, index) => {
                console.log(`   skill ${index + 1}: ${skill}`);
            });
        });
    }
}
