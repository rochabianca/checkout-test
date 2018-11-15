### Instructions

1. Install the dependencies of the backend with `npm install`
2. Install the client's dependencies with `npm run install-client`
3. run the server with `npm run dev`

### To Solve

- [x] Excess redirect
- [x] CORS

### To Do

- [x] Coupon Logic

### Instructions

1. Create a new Git repository with `git init`.

2. Install the dependencies with `npm install`.

3. Run the server with `node server.js`.

4. Build the user interface in the _resources_ folder.

5. Commit your progress.

6. Zip the directory and send it back to us. You can delete the _resources_ folder in order to reduce the directory size.

### Implementation details

1. You can get all the data you need for the checkout interface with a `GET` request to `/api/checkouts/:checkoutId`.

2. If you pass the id of the selected coupon in the query of the previous request you get the data with an updated total price.

3. The confirmation action should be a `POST` request to `/api/checkouts/:checkoutId` with the id of the selected coupon in the body.

### Implementation requirements

1. When the user selects a coupon the summary of the purchase must update with the new values.

2. When the user clicks on _cancelar_ a modal must appear with the cancellation message.

3. When the user clicks on _confirmar_ a modal must appear with the success message.

### FAQ

1. Is there a time limit?

   No, take your time.

2. Can I use jQuery? Sass? React? Vue? Bootstrap? BEM?

   You can use anything you want.

3. Where's the design for the other breakpoints?

   There isn't one. You could make it respond well to larger screens, but it's not the focus of this test.

4. What browser versions should I support?

   You'll be fine if your interface works flawless in the most recent versions of Chrome and Firefox.

5. Can I get the files to embed the font used in the design?

   The font used is Montserrat and is available in [Google Fonts](https://fonts.google.com/specimen/Montserrat).

6. Why is everything so big in the Photoshop file?

   You may notice that everything is twice as big in the Photoshop file. The layout is designed to consider Retina displays. Remember to half the dimensions you see there on your code. Use the PNG images as an example of the result you should be looking for.
