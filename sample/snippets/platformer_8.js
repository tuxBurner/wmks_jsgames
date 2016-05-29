//.include("Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX")
.include("Audio, Sprites, Scenes, Input, 2D, Anim, Touch, UI, TMX")

Q.audio.enableHTML5Sound();


// in the callback of Q.loadTMX
Q.load({"Kick": "16287__ltibbits__kick-high-vol.mp3"});

// when play kills monster
Q.audio.play("Kick");