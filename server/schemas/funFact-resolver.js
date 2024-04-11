export const resolvers = {
    Query: {
        async funFact(parent, args){
            return <div>
                <h2>{args.title}</h2>
                <p>{args.description}</p>
                </div> 
        }
    }
}