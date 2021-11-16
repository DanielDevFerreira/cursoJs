const site: unknown = "teste";


const lista: string[] = [];

lista.push(site as string);

// ou 

lista.push(<string>site)
