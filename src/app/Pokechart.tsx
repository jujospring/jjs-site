
import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getRandomIntInclusive } from "@/lib/utils";
import getPokemon from "@/lib/GetPokemon";
import { Main, Stat, Type, BaseStats } from "@/lib/definitions";
import GetRandomPokemon from "@/app/GetRandomPokemon";
import { useEffect, useState } from "react"

const chartConfig = {
  mobile: {
    label: "Mobile",
    // color: "hsl(var(--chart-1))",
    color: "hsla(106, 65%, 50%, 0.8)"
  },
} satisfies ChartConfig

// export async function Pokechart() {
  
//   // const pokemonData = await GetRandomPokemon();
//   const pokemonData = await getPokemon();

//   const chartData = [];

//   for (let i = 0; i < pokemonData.statNames.length; i++) {
//     chartData.push({ stat: `${pokemonData.statNames[i]}`, value: pokemonData.statValues[i]});
//   }
  
//   return (
//     <Card className="">
//       <CardHeader className="items-center pb-4">
//         <CardTitle>Pokemon Radar Chart</CardTitle>
//         <CardDescription>
//           Showing {pokemonData.name}`s base stats
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="pb-0">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[300px]"
//         >
//           <RadarChart data={chartData}>
//             <ChartTooltip
//               cursor={false}
//               content={<ChartTooltipContent hideLabel />}
//             />
//             <PolarGrid className="fill-[--color-mobile] opacity-20" />
//             <PolarAngleAxis dataKey="stat" />
//             <Radar
//               dataKey="value"
//               fill="var(--color-mobile)"
//               fillOpacity={0.4}
//             />
//           </RadarChart>
//         </ChartContainer>
//       </CardContent>
//       {/* <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="flex items-center gap-2 leading-none text-muted-foreground">
//           January - June 2024
//         </div>
//       </CardFooter> */}
//     </Card>
//   )
// }

const Pokechart = () => {
  // or just do let chartData = []
  // const [chartData, setChartData] = useState([])
  // let chartData: BaseStats = {name: "", statNames: [], statValues: []};
  let chartData: any[] = [
    {},
    {},
    {},
    {},
    {},
    {}
  ];
  const baseStats: BaseStats = {name: "", statNames: [], statValues: []};

  const getPokemonData = async () => {
    const response = await getPokemon();
    if(response.ok || !response.ok) {
      const stats: Stat[] = response.stats;
      const name: string = response.name;

      // console.log(`Pokemon: ${name}; DexNo: ${getRandomIntInclusive(1, 1025)}`);
      console.log(`Pokemon: ${name}`);
    
      // const baseStats: BaseStats = {name: "", statNames: [], statValues: []};
    
      baseStats.name = name;
    
      for (let i = 0; i < stats.length; i++) {
        baseStats.statNames[i] = stats[i].stat.name;
        baseStats.statValues[i] = stats[i].base_stat;
      }

      // console.log(baseStats);

      for (let i = 0; i < baseStats.statNames.length; i++) {
        chartData[i]= {stat: `${baseStats.statNames[i]}`, value: baseStats.statValues[i]};
      }
      console.log("chartData: ", chartData)
      // // const body =  await response.json() // or .body() whatever the API resp gives you
      // Object.entries(body.statNames).map(([statName, statValue]) => {
      //  chartData.push({stat: statName, value: statValue })
      // })
    } else {
      // you dont fucked up here
      console.log("I fucked up")
    }
  }


  useEffect(() => {
    getPokemonData()
  }, [])
  console.log("chartData: ", chartData)
  return (
    <Card className="">
      <CardHeader className="items-center pb-4">
        <CardTitle>{`${baseStats.name}`}</CardTitle>
        <CardDescription>
          {`Showing ${baseStats.name}'s base stats`}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarGrid className="fill-[--color-mobile] opacity-20" />
            <PolarAngleAxis dataKey="stat" />
            <Radar
              dataKey="value"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
       {/* <CardFooter className="flex-col gap-2 text-sm">
//         <div className="flex items-center gap-2 font-medium leading-none">
//           Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//         </div>
//         <div className="flex items-center gap-2 leading-none text-muted-foreground">
//           January - June 2024
//         </div>
//       </CardFooter> */}
    </Card>
  );
}

export default Pokechart;