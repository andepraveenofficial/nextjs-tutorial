# Caching in Next.js

- By default Next.js caches all fetch requests in the data cache, which is a persistent HTTP cache on the server.
- This helps optimize pages such as a blog post where the content rarely changes
- We also know that we can opt out of caching :
  1.  by using the cache : "no-store" option in a fetch request
  2.  by using a dynamic function before making the fetch request
  3.  by using a route segment config like fetch-cache or dynamic
- A news website is a great example where you want to make sure you're fetching the latest data at all times.
- This approach seems binary : either caching or no-caching
- In real-world applications, there are scenarios where a middle ground is required.
- For example, an event listings page might have event details such as schedule or venue information that change occasionally.
- In this case, it is acceptable to fetch updated data once every hour as freshness is not critical.

### Revalidation

- Revalidation is the process of purging the Data Cache and re-fetching the latest data.

### Time-based revalidation

- Next.js automatically revalidate data after a certain amount of time has passed

### Revalidation

- You can set the revalidate route segment configuration to establish the default revalidation time for a layout or page : `export const revalidate = 10;`
- Regarding the revalidation frequency, the lowest revalidate time across each layout and page of a single route will determine the revalidation frequency of the entire route.


### Checking

- Check console of json-server
- check console of nextjs
