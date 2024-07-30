import { getRandomIntInclusive } from "@/lib/utils";
import getPokemon from "@/lib/GetPokemon";
import { Main, Stat, Type, BaseStats } from "@/lib/definitions";

const TypeNames: string[] = []

export default async function GetRandomPokemon() {
  
  // const dexNo = getRandomIntInclusive(1,1025);

  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(1025);
  const randNo = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

  // const data = await getPokemon(randNo);
  // console.log(data?.stats);
  // const stats: Stat[] = data.stats;
  // // const types: Type[] = data.types;
  // const name: string = data.name;
  console.log(`Pokemon: ${name}; DexNo: ${randNo}`);

  const baseStats: BaseStats = {name: "", statNames: [], statValues: []};

  // baseStats.name = name;

  // for (let i = 0; i < stats.length; i++) {
  //   baseStats.statNames[i] = stats[i].stat.name;
  //   baseStats.statValues[i] = stats[i].base_stat;
  // }

  // for (let i = 0; i < types.length; i++) {
  //   TypeNames.push(types[i].type.name);
  // }

  return baseStats;
}