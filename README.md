# Genee Conference Room

This project is licensed for open source under GNU GPL v3: http://www.gnu.org/licenses/gpl-3.0.en.html

**Note: These instructions are for the HackerDojo only.<span
class="Apple-converted-space">  </span>To utilize these instructions
outside of the HackerDojo Google App engine, you will have to create a
new Google App Engine Instance, and user, and admin accounts for that
instance.**


## Setup Instructions


To use this software you must have access to the Conference room system
git repo, and an account on Google App engine, an account on the Genee
system, and the Google App Engine software installed on your local
workstation.


<span class="s1">**1. Install SDK:**</span>

Google App Engine SDK<span class="Apple-converted-space">  </span>for
python on your local machine to publish the app on Google app Engine.


https://cloud.google.com/appengine/downloads?hl=en\#Google\_App\_Engine\_SDK\_for\_Python


<span class="s1">**2. Pull in code:**</span>

Obtain the conference room code, using this command:

        git clone https://github.com/UG-Proto/conferenceroom.git

<span class="s1">**3. Edit the “yaml” file called app.yaml.**</span>**<span
class="Apple-converted-space"> </span>**


You must create unique application name ( ID ) to run as a unique
instance on Google App Engine.

Edit the “application line”.

        application: hackerdojo-room

(hackerdojo-room is the current default app for one specific room)

*Change to:*

        application: hackerdojo-room-N

( Example hackerdojo-room-3 ) for a third room.


*Current there is:*

        application: hackerdojo-room

(for the default meeting room) and hackerdojo-room-2 for the new meeting room across the hall.


<span class="s1">**5. Create a unique user account in Genee.**</span>

This can be done manually with the GUI interface. You will need a working and unique Google E-Mail address.i
To register visit this URL, and authenticate with a Google base E-mail account only.

https://genee.me/production-py/external/?next=/production-py/web/users/profile

After you login, you MUST edit the last name of the account you created, and set the last name to the application name you created for app engine.
In this example case, make it

    “hackerdojo-room-3”

<span class="s1">**6. With Google App Engine SDK running**</span>


Select File-&gt;Add Existing Application-&gt; Choose …

Select the directory where you pulled the code from in step 2 (the
directory of the Conference room “app.yaml” file is located.


<span class="s1">**7. Login into the Google App Engine Console. <span
class="Apple-converted-space"> </span>**</span>



Visit this link : https://console.cloud.google.com/project and Login with a Google Account that has been setup to administer App Engine projects.


<span class="s1">**8. Create a New Project**</span>


Use<span class="Apple-converted-space">  </span>the Same application
name (ID) you created in Step 4 (Example: hackerdojo-room-3).

<span class="s1">**9. Deploy**</span>



From your local client find the “Deploy” button and try to deploy.


If all goes right the SDK will display a text message in the log history
about the app being deployed. If this goes right, you can attempt to access the app in your
browser now. You will need
to find the URL of the app.The URL’s for App engine are pretty uniform, it SHOULD be:


    https://{your-app-engine-id}.appspot.com

For this example it should be:

    http://hackerdojo-room-3.appspot.com


====


If all goes right, your app should be up and deployed. You will need to now login to the
app, and test it out.



