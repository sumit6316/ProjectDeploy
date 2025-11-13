Created a component folder inside src in which there are three components 1.Header,2.Body,3.ApiCalling,4.ProductCard

Haeder -->Yaha pe nav bar banaya gaya hai jisme searchbar include hai


Body--> Yaha pe main logic hai jo ki sab ko integrate kr raha hai Header , ApiCalling , Search Functionality aur ProductCard ko

ApiCalling --> yaha pe api se data fetch krke parent body ko bheja jaa rha hai. Api se data lana mein axios ka prayog kiya gaya hai



Flow aisa hai ki body renders both header and apicalling component 
api caller send data to body
body product ko store krega aur products ko filter bhi kargea according to search.