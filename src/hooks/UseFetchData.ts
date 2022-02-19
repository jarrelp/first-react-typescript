import { useState, useEffect } from "react";

//fetch data
//fetch data of url
//general function
export function UseFetchData<Payload>(
url: string
): {
  data: Payload | null;
  done: boolean;
} {
  const [data, dataSet] = useState<Payload | null>(null);
  const [done, doneSet] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((d: Payload) => {
        dataSet(d);
        doneSet(true);
      });
  }, [url]);

  return {
    data,
    done
  };
}
//how to use this function:

//add interface:
interface ObjectExample{
  name: string
  dateofbirth: Date
}

  function UseUseFetchDataExample() {
    const { data, done } = UseFetchData<ObjectExample[]>("/blablabla.json");
    // return <div>{done && <img src={data![0].dateofbirth} alt='blabla'}
  }

  //this file can be deleted