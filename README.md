# conferenceroom
<span class="s1">Genee Conference Room Setup Instructions</span>

<span class="s1"></span>\



**Note: These instructions are for the HackerDojo only.<span
class="Apple-converted-space">  </span>To utilize these instructions
outside of the HackerDojo Google App engine, you will have to create a
new Google App Engine Instance, and user, and admin accounts for that
instance.**



To use this software you must have access to the Conference room system
git repo, and an account on Google App engine, an account on the Genee
system, and the Google App Engine software installed on your local
workstation.


<span class="s1">**1.) Install SDK:**</span>

Google App Engine SDK<span class="Apple-converted-space">  </span>for
python on your local machine to publish the app on Google app Engine.



https://cloud.google.com/appengine/downloads?hl=en\#Google\_App\_Engine\_SDK\_for\_Python



<span class="s1">**2.) Pull in code:**</span>

Obtain the conference room code, using this command:



<span class="s2"><span class="Apple-tab-span"> </span></span>git clone
https://github.com/UG-Proto/conferenceroom.git



<span class="s1">**3.) Edit the “yaml” file called app.yaml.<span
class="Apple-converted-space">  </span>**</span>**<span
class="Apple-converted-space"> </span>**


You must create unique application name ( ID ) to run as a unique
instance on Google App Engine.<span class="Apple-converted-space"> 
</span>Edit the “application line”.



<span class="s2"><span class="Apple-tab-span">
</span></span>application: hackerdojo-room<span class="s2"> <span
class="Apple-converted-space"> </span></span>

<span class="Apple-tab-span"> </span>(hackerdojo-room is the current
default app for one specific room)

<span class="Apple-tab-span"> </span>

*Change to:*

<span class="s2"><span class="Apple-tab-span">
</span></span>application: hackerdojo-room-N

<span class="s3"><span class="Apple-tab-span"> </span></span>( Example
hackerdojo-room-3 ) for a third room.

\

*Current there is:*<span class="s3"><span
class="Apple-converted-space"> </span></span>

<span class="Apple-tab-span"> </span>application: hackerdojo-room<span
class="s2"><span class="Apple-converted-space"> </span></span>

<span class="Apple-tab-span"> </span>(for the default meeting room) and
hackerdojo-room-2<span class="Apple-converted-space"> </span>

<span class="Apple-tab-span"> </span>for the new meeting room across the
hall.



<span class="s1">**5.) Create a unique user account in Genee. <span
class="Apple-converted-space"> </span>**</span>



This can be done manually with the GUI interface. <span
class="Apple-converted-space">  </span>You will need a working and
unique Google E-Mail address.<span class="Apple-converted-space"> 
</span>To register visit this URL, and authenticate with a Google base
E-mail account only.



<span class="s1">*<span class="Apple-converted-space"> </span>HYPERLINK
"https://genee.me/production-py/external/?next=/production-py/web/users/profile"https://genee.me/production-py/external/?next=/production-py/web/users/profile*</span>



After you login, you MUST edit the last name of the account you created,
and set the last name to the application name you created for app
engine.<span class="Apple-converted-space">  </span>In this example
case, make it<span class="Apple-converted-space"> </span>

“hackerdojo-room-3”



<span class="s1">**6.) With Google App Engine SDK running**</span>



select File-&gt;Add Existing Application-&gt; Choose …

Select the directory where you pulled the code from in step 2 (the
directory of the Conference room “app.yaml” file is located.



<span class="s1">**7.) Login into the Google App Engine Console. <span
class="Apple-converted-space"> </span>**</span>



Visit this link :<span class="Apple-converted-space"> </span><span
class="s4"> HYPERLINK
"https://console.cloud.google.com/project"https://console.cloud.google.com/project</span>
and Login with a Google Account that has been setup to administer App
Engine projects.


<span class="s1">**8.) Create a New Project<span
class="Apple-converted-space"> </span>**</span>



Use<span class="Apple-converted-space">  </span>the Same application
name (ID) you created in Step 4 (Example: hackerdojo-room-3

<span class="Apple-converted-space"> </span>

<span class="s1">**9.) Deploy**</span>



From your local client find the “Deploy” button and try to deploy.<span
class="Apple-converted-space">  </span>The button looks like this


If all goes right the SDK will display a text message in the log history
about the app being deployed.<span class="Apple-converted-space"> 
</span>If this goes right, you can attempt to access the app in your
browser now.<span class="Apple-converted-space">  </span>You will need
to find the URL of the app.<span class="Apple-converted-space"> 
</span>The URL’s for App engine are pretty uniform, it SHOULD be:



<span class="s5">https://{your-app-engine-id}.</span><span class="s1">
HYPERLINK "http://appspot.com"appspot.com</span>



<span class="s6">For this example it should be:<span
class="Apple-converted-space"> </span></span><span class="s1"> HYPERLINK
"http://hackerdojo-room-3.appspot.com"http://hackerdojo-room-3.appspot.com</span>

<span class="s1"></span>\



====


If all goes right, your app should be up and deployed.<span
class="Apple-converted-space">  </span>You will need to now login to the
app, and test it out.



