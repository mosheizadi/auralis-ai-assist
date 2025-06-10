import streamlit as st
from gtts import gTTS
import os
import tempfile
from datetime import datetime
from smart_city_modules.drone_pathfinder import a_star_path

# Title
st.set_page_config(page_title="Auralis AI Assist", layout="centered")
st.title("🤖 Auralis AI Assist")
st.markdown("Multimodal Assistant Interface (Voice, NLP, Drone, TTS)")

# Text Input
user_input = st.text_input("🧠 Enter a command (text):", "")

# TTS Response
if st.button("🔊 Speak it"):
    if user_input:
        tts = gTTS(text=user_input, lang='en')
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as fp:
            tts.save(fp.name)
            audio_file = open(fp.name, 'rb')
            audio_bytes = audio_file.read()
            st.audio(audio_bytes, format='audio/mp3')

# Drone Path Planning
st.markdown("🚁 **Simulate Drone Path** (5x5 grid with obstacles)")
if st.button("📍 Plan Path"):
    grid = [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
    ]
    start = (0, 0)
    end = (4, 4)
    path = a_star_path(grid, start, end)
    st.success(f"Optimal Drone Path: {path}" if path else "No path found.")

# Footer
st.markdown("---")
st.caption("Auralis AI Assist | Powered by Streamlit")
