# image-manager

This app it allows to manage your image!! I hope you all enjoyed!!!

## 🚀 to start

to start to ejecuting this code you should:

- Open your terminal in a concret folder
- Ejecute the comand:

```
git clone https://github.com/jonCroatanUto/images-manager.git
```

- Go inside the folder `image-manager` and run:

```
npm install
```

- Create a `.env` file adding in it:

```
REACT_APP_SERVER_PRODUCTION=https://memes-and-gifs-api.herokuapp.com/

```

You can found this app deployed [here](https://testing-image-manager.netlify.app) :

## server side

- the server side that use this site is deployed [here](https://memes-and-gifs-api.herokuapp.com/)
- this server is used for other aplications
- You will found the files that use this concret site in :
  - imagesController
  - imagesRoutes
  - imagesModals
- You can found the server code in [this github repo](https://github.com/jonCroatanUto/giftyfy.git)

## database

- database is deployed in Atlas mongoDB platform
- is connected with server by mongoose

<pre>  
├───.github     <i>// Github actions config files </i>
├───public
├───types.tsx
├───index.css
└───src	
    ├───components
    |        ├───DeleteModal
    |        ├───FileInput
    |        ├───ImageItem
    |        ├───InputText
    |        ├───Navbar
    |        ├───Spinner  
    |        ├───UploadModal    
    |        └───UpdateModal
    ├───pages
    |       ├───Home
    |       ├───Login           <i>//not Aviable</i>
    |       └───Register        <i>//not Aviable</i>
    | 
    ├─--hocs 
    |       └───ModalHoc
    |               
    └───redux
          ├───modalReducer
          └───ImageDataReducer
   


</pre>

# 🧭 App navigation

## Home page 🗺

Where it's displayed all image by a responsive way using `React-bootstrap`

## ImageDataReducer

By setting the image data in this reducer my aplication is able to observe de modification that recive this data , as an update or deleing files. By this way , the Home page is syncronized with database and refresh the images displayed

## modalReducer

It allows open the modals from any place of the site and pass to the modal the necessary information.

## ModalHoc

It give the same format to all the content that i want to put inside a modal. That save me to write a lot of repetitive code.

# ✨ Wishlist

- Login and Register
- Do a proflie page
- As a user, see the owner of others images ,chat with them, give likes to images
- Stadistic follow of your activity as user

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.
