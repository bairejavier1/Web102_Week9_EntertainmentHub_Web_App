# Web Development Final Project - *EntertainmentHub*

Submitted by: **Baire Diaz**

This web app: **EntertainmentHub is a dynamic, community-driven forum where users can share and discuss anything they’re passionate about—from movies and music to sports, memes, and more. Built with React, Vite, and Supabase, the platform supports real-time posting, commenting, and upvoting, making it a lively space for entertainment enthusiasts of all kinds. Whether you're here to spark a debate, share a favorite clip, or discover trending topics, EntertainmentHub is your go-to destination for open conversation and creative expression. 🎭**

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **Web app includes a create form that allows the user to create posts**
  - Form requires users to add a post title
  - Forms should have the *option* for users to add: 
    - additional textual content
    - an image added as an external image URL
- [x] **Web app includes a home feed displaying previously created posts**
  - Web app must include home feed displaying previously created posts
  - By default, each post on the posts feed should show only the post's:
    - creation time
    - title 
    - upvotes count
  - Clicking on a post should direct the user to a new page for the selected post
- [x] **Users can view posts in different ways**
  - Users can sort posts by either:
    -  creation time
    -  upvotes count
  - Users can search for posts by title
- [x] **Users can interact with each post in different ways**
  - The app includes a separate post page for each created post when clicked, where any additional information is shown, including:
    - content
    - image
    - comments
  - Users can leave comments underneath a post on the post page
  - Each post includes an upvote button on the post page. 
    - Each click increases the post's upvotes count by one
    - Users can upvote any post any number of times

- [x] **A post that a user previously created can be edited or deleted from its post pages**
  - After a user creates a new post, they can go back and edit the post
  - A previously created post can be deleted from its post page

The following **optional** features are implemented:


- [x] Web app implements pseudo-authentication
  - Users can only edit and delete posts or delete comments by entering the secret key, which is set by the user during post creation
  - **or** upon launching the web app, the user is assigned a random user ID. It will be associated with all posts and comments that they make and displayed on them
  - For both options, only the original user author of a post can update or delete it
- [x] Users can repost a previous post by referencing its post ID. On the post page of the new post
  - Users can repost a previous post by referencing its post ID
  - On the post page of the new post, the referenced post is displayed and linked, creating a thread
- [x] Users can customize the interface
  - e.g., selecting the color scheme or showing the content and image of each post on the home feed
- [x] Users can add more characterics to their posts
  - Users can share and view web videos
  - Users can set flags such as "Question" or "Opinion" while creating a post
  - Users can filter posts by flags on the home feed
  - Users can upload images directly from their local machine as an image file
- [x] Web app displays a loading animation whenever data is being fetched

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

- Post Creation Form: Users can create posts with a required title, optional content, and an external image URL.

- Home Feed with Sorting & Search: Posts are displayed in a feed with sorting options (by creation time or upvotes) and a search bar to filter by title.

- Post Detail Page: Clicking a post opens a dedicated page showing full content, image, comments, and interactive features.

- Comment System: Users can leave comments under any post, with timestamps and author tracking.

- Upvote Button: Each post includes an upvote button that increases the post’s score with every click.

- Post Editing & Deletion: Users can edit or delete their own posts directly from the post detail page.

- Pseudo-Authentication: Each user is assigned a unique ID stored in localStorage, allowing ownership of posts and comments without full login.

- Foreign Key Relationships: Supabase enforces relational integrity between posts and comments for clean data management.

- Responsive Image Handling: External images are resized and styled to maintain layout consistency.

- Error Handling & Feedback: Insert and update operations include error logging and user-friendly messages.

- Modular Component Architecture: Clean separation of concerns with reusable components for posts, comments, forms, and navigation.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://cdn.loom.com/sessions/thumbnails/8929513fee5844cc8ffa8ccc5f96a409-7a45d2e5d70f23fd-full-play.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


GIF created with Loom

## Notes

Describe any challenges encountered while building the app.

- Database Schema Alignment Ensuring that frontend field names matched Supabase column names (e.g., title vs tittle) was critical to avoid silent insert failures. This required careful syncing between code and database structure.

- Foreign Key Constraints Setting up a foreign key between comments.post_id and posts.id revealed type mismatches (uuid vs int8). Resolving this involved schema migrations and decisions about using UUIDs for scalability.

- Silent Supabase Errors Supabase operations sometimes failed silently when required fields were missing or mismatched. Adding explicit error logging and feedback helped surface these issues during development.

- Post Creation Not Updating UI After creating a post, the homepage didn’t immediately reflect the new entry due to how React’s lifecycle and Supabase fetching were structured. This was resolved by improving navigation and refetch logic.

- Image Display and Layout External image URLs could render oversized visuals that disrupted the layout. Styling adjustments were made to constrain image dimensions and maintain a clean UI.

- Pseudo-Authentication Logic Implementing a lightweight user identity system using localStorage required careful handling to ensure consistent post ownership and comment attribution without full auth.

## License

    Copyright [2025] [Baire Diaz]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.