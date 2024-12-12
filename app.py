import cv2
import mediapipe as mp
import pyautogui
import tkinter as tk

mp_face_mesh = mp.solutions.face_mesh
face_mesh = mp_face_mesh.FaceMesh()

screen_width, screen_height = pyautogui.size()

root = tk.Tk()
root.title("Eye-Controlled Virtual Keyboard")

text_box = tk.Text(root, height=5, width=40)
text_box.pack()

keys = ['A', 'B', 'C', 'D', 'E', 'F']

def on_key_press(key):
    text_box.insert(tk.END, key)

buttons = []
for key in keys:
    btn = tk.Button(root, text=key, command=lambda k=key: on_key_press(k), width=5, height=2)
    btn.pack(side=tk.LEFT)
    buttons.append(btn)

def get_gaze_direction(landmarks, frame_width, frame_height):
    left_eye_center = landmarks[33]
    right_eye_center = landmarks[133]
    avg_x = (left_eye_center.x + right_eye_center.x) / 2
    avg_y = (landmarks[159].y + landmarks[145].y) / 2
    mouse_x = int(avg_x * screen_width)
    mouse_y = int(avg_y * screen_height)
    return mouse_x, mouse_y

def get_frame_and_gaze():
    ret, frame = cap.read()
    if not ret:
        return None, None
    flipped_frame = cv2.flip(frame, 1)
    rgb_frame = cv2.cvtColor(flipped_frame, cv2.COLOR_BGR2RGB)
    results = face_mesh.process(rgb_frame)
    gaze_direction = None
    if results.multi_face_landmarks:
        for face_landmarks in results.multi_face_landmarks:
            gaze_direction = get_gaze_direction(face_landmarks.landmark, flipped_frame.shape[1], flipped_frame.shape[0])
    return flipped_frame, gaze_direction

cap = cv2.VideoCapture(0)

while True:
    frame, gaze_direction = get_frame_and_gaze()
    if gaze_direction is not None:
        mouse_x, mouse_y = gaze_direction
        pyautogui.moveTo(mouse_x, mouse_y)
        gaze_x = gaze_direction[0]
        key_index = int(gaze_x / screen_width * len(keys))
        for i, btn in enumerate(buttons):
            if i == key_index:
                btn.config(bg='yellow')
            else:
                btn.config(bg='SystemButtonFace')
    cv2.imshow("Eye Detection", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    if gaze_direction is not None:
        mouse_x, mouse_y = gaze_direction
        pyautogui.click(mouse_x, mouse_y)

cap.release()
cv2.destroyAllWindows()
root.mainloop()
