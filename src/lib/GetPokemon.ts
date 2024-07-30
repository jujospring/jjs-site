import { Main, Stat, Type, BaseStats } from "@/lib/definitions";

export default async function getPokemon() {

  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(1025);
  const randNo = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  
  
  const url = `https://pokeapi.co/api/v2/pokemon/${randNo}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = response.json();
    // console.log(result);


    //START TEST
  
    // const data = await getPokemon(randNo);

    // console.log(data?.stats);
    // const stats: Stat[] = result.stats;
    // // const types: Type[] = data.types;
    // const name: string = result.name;

    // console.log(`Pokemon: ${name}; DexNo: ${randNo}`);
  
    // const baseStats: BaseStats = {name: "", statNames: [], statValues: []};
  
    // baseStats.name = name;
  
    // for (let i = 0; i < stats.length; i++) {
    //   baseStats.statNames[i] = stats[i].stat.name;
    //   baseStats.statValues[i] = stats[i].base_stat;
    // }
  
    // return baseStats;

    //END TEST

    return result;

  } catch (error) {
    console.error(error);
    return {name: "", statNames: [], statValues: []};
  }
}