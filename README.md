### For run project
# npm install 
# npm run dev




### API endpoints

### article API

## post
http://localhost:8080/api/article/article --->  Add a new article 

## get
http://localhost:8080/api/article/article ---> To get all Articles

## get
http://localhost:8080/api/article/:id ---> to get  an Article with ObjectId=id


## post
http://localhost:8080/api/article/:id/comment ---> Comment to an Article with ObjectId=id

## get
http://localhost:8080/api/article/:id/comment ---> To get all comments of an Articles with id

## put
http://localhost:8080/api/article/article/:id ---> To update an Article with ObjectId=id

## get

http://localhost:8080/api/article/:id/tags---> To get all tags of an article

## post
http://localhost:8080/api/article/:id/tags---> To add tags to an article

### Tag API
 
## post
http://localhost:8080/api/tag ---> To add tags to an tag

## get
http://localhost:8080/api/tag/tag_id---> To get titile of all articles have an spicifec tag

### Comment API
##get
http://localhost:8080/api/commetn---> To get all commetns

## put
http://localhost:8080/api/comment/commetn_id ---> To update an exist commetn







