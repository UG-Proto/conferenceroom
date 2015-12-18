# conferenceroom
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="CreationTime" content="2049-12-18T12:45:00Z">
  <meta name="ModificationTime" content="2049-12-18T12:45:00Z">
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="1404.13">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; line-height: 15.0px; font: 11.0px Helvetica; color: #000000}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; line-height: 15.0px; font: 11.0px Helvetica; color: #000000; min-height: 13.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 11.0px Helvetica; color: #000000; min-height: 13.0px}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 11.0px Helvetica; color: #000000}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 18.0px Helvetica; color: #000000}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 11.0px Courier; color: #000000}
    p.p7 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 11.0px 'Arial Unicode MS'; color: #000000}
    p.p8 {margin: 0.0px 0.0px 0.0px 0.0px; text-align: center; line-height: 15.0px; font: 12.0px 'Times New Roman'}
    p.p9 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 12.0px Courier}
    p.p10 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 11.0px Courier; color: #000000; min-height: 13.0px}
    p.p11 {margin: 0.0px 0.0px 0.0px 0.0px; line-height: 15.0px; font: 10.0px 'Times New Roman'; color: #000000; min-height: 11.0px}
    p.p12 {margin: 0.0px 0.0px 0.0px 0.0px; font: 10.0px 'Times New Roman'; color: #000000; min-height: 11.0px}
    p.p13 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px 'Times New Roman'; min-height: 15.0px}
    span.s1 {text-decoration: underline}
    span.s2 {font: 11.0px Helvetica}
    span.s3 {font: 11.0px Courier}
    span.s4 {font: 12.0px 'Times New Roman'; text-decoration: underline ; color: #000000}
    span.s5 {font: 11.0px Courier; color: #000000}
    span.s6 {font: 11.0px Helvetica; color: #000000}
    span.Apple-tab-span {white-space:pre}
  </style>
</head>
<body>
<p class="p1"><span class="s1">Genee Conference Room Setup Instructions</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><br></p>
<p class="p4"><b>Note: These instructions are for the HackerDojo only.<span class="Apple-converted-space">  </span>To utilize these instructions outside of the HackerDojo Google App engine, you will have to create a new Google App Engine Instance, and user, and admin accounts for that instance.</b></p>
<p class="p3"><br></p>
<p class="p4">To use this software you must have access to the Conference room system git repo, and an account on Google App engine, an account on the Genee system, and the Google App Engine software installed on your local workstation.</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>1.) Install SDK:</b></span></p>
<p class="p4">Google App Engine SDK<span class="Apple-converted-space">  </span>for python on your local machine to publish the app on Google app Engine.</p>
<p class="p3"><br></p>
<p class="p4">https://cloud.google.com/appengine/downloads?hl=en#Google_App_Engine_SDK_for_Python</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>2.) Pull in code:</b></span></p>
<p class="p4">Obtain the conference room code, using this command:</p>
<p class="p3"><br></p>
<p class="p6"><span class="s2"><span class="Apple-tab-span">	</span></span>git clone https://github.com/UG-Proto/conferenceroom.git</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>3.) Edit the “yaml” file called app.yaml.<span class="Apple-converted-space">  </span></b></span><b><span class="Apple-converted-space"> </span></b></p>
<p class="p3"><br></p>
<p class="p4">You must create unique application name ( ID ) to run as a unique instance on Google App Engine.<span class="Apple-converted-space">  </span>Edit the “application line”.</p>
<p class="p3"><br></p>
<p class="p6"><span class="s2"><span class="Apple-tab-span">	</span></span>application: hackerdojo-room<span class="s2"> <span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="Apple-tab-span">	</span>(hackerdojo-room is the current default app for one specific room)</p>
<p class="p3"><span class="Apple-tab-span">	</span></p>
<p class="p4"><i>Change to:</i></p>
<p class="p6"><span class="s2"><span class="Apple-tab-span">	</span></span>application: hackerdojo-room-N</p>
<p class="p4"><span class="s3"><span class="Apple-tab-span">	</span></span>( Example hackerdojo-room-3 ) for a third room.</p>
<p class="p3"><br></p>
<p class="p4"><i>Current there is:</i><span class="s3"><span class="Apple-converted-space"> </span></span></p>
<p class="p6"><span class="Apple-tab-span">	</span>application: hackerdojo-room<span class="s2"><span class="Apple-converted-space"> </span></span></p>
<p class="p4"><span class="Apple-tab-span">	</span>(for the default meeting room) and hackerdojo-room-2<span class="Apple-converted-space"> </span></p>
<p class="p4"><span class="Apple-tab-span">	</span>for the new meeting room across the hall.</p>
<p class="p7"></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>5.) Create a unique user account in Genee. <span class="Apple-converted-space"> </span></b></span></p>
<p class="p3"><br></p>
<p class="p4">This can be done manually with the GUI interface. <span class="Apple-converted-space">  </span>You will need a working and unique Google E-Mail address.<span class="Apple-converted-space">  </span>To register visit this URL, and authenticate with a Google base E-mail account only.</p>
<p class="p3"><br></p>
<p class="p8"><span class="s1"><i><span class="Apple-converted-space"> </span>HYPERLINK "https://genee.me/production-py/external/?next=/production-py/web/users/profile"https://genee.me/production-py/external/?next=/production-py/web/users/profile</i></span></p>
<p class="p3"><br></p>
<p class="p4">After you login, you MUST edit the last name of the account you created, and set the last name to the application name you created for app engine.<span class="Apple-converted-space">  </span>In this example case, make it<span class="Apple-converted-space"> </span></p>
<p class="p4">“hackerdojo-room-3”</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>6.) With Google App Engine SDK running</b></span></p>
<p class="p3"><br></p>
<p class="p4">select File-&gt;Add Existing Application-&gt; Choose …</p>
<p class="p4">Select the directory where you pulled the code from in step 2 (the directory of the Conference room “app.yaml” file is located.</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>7.) Login into the Google App Engine Console. <span class="Apple-converted-space"> </span></b></span></p>
<p class="p3"><br></p>
<p class="p4">Visit this link :<span class="Apple-converted-space"> </span><span class="s4"> HYPERLINK "https://console.cloud.google.com/project"https://console.cloud.google.com/project</span> and Login with a Google Account that has been setup to administer App Engine projects.</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p5"><span class="s1"><b>8.) Create a New Project<span class="Apple-converted-space"> </span></b></span></p>
<p class="p3"><br></p>
<p class="p4">Use<span class="Apple-converted-space">  </span>the Same application name (ID) you created in Step 4 (Example: hackerdojo-room-3</p>
<p class="p3"><span class="Apple-converted-space"> </span></p>
<p class="p5"><span class="s1"><b>9.) Deploy</b></span></p>
<p class="p3"><br></p>
<p class="p4">From your local client find the “Deploy” button and try to deploy.<span class="Apple-converted-space">  </span>The button looks like this</p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p3"><br></p>
<p class="p4">If all goes right the SDK will display a text message in the log history about the app being deployed.<span class="Apple-converted-space">  </span>If this goes right, you can attempt to access the app in your browser now.<span class="Apple-converted-space">  </span>You will need to find the URL of the app.<span class="Apple-converted-space">  </span>The URL’s for App engine are pretty uniform, it SHOULD be:</p>
<p class="p3"><br></p>
<p class="p9"><span class="s5">https://{your-app-engine-id}.</span><span class="s1"> HYPERLINK "http://appspot.com"appspot.com</span></p>
<p class="p3"><br></p>
<p class="p9"><span class="s6">For this example it should be:<span class="Apple-converted-space"> </span></span><span class="s1"> HYPERLINK "http://hackerdojo-room-3.appspot.com"http://hackerdojo-room-3.appspot.com</span></p>
<p class="p10"><span class="s1"></span><br></p>
<p class="p3"><br></p>
<p class="p4">====</p>
<p class="p3"><br></p>
<p class="p4">If all goes right, your app should be up and deployed.<span class="Apple-converted-space">  </span>You will need to now login to the app, and test it out.</p>
<p class="p11"><br></p>
<p class="p12"><br></p>
<p class="p13"><br></p>
<p class="p12"><br></p>
<p class="p13"><br></p>
<p class="p13"><br></p>
<p class="p11"><br></p>
</body>
</html>


