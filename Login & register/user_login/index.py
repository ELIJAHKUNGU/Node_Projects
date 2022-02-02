import math

# method to count total valid steps and return them as a list
def countSteps(sequence):
    F = sequence.count('F')
    B = sequence.count('B')
    L = sequence.count('L')
    R = sequence.count('R')
    return [F, B, L, R]
# method to display details about valid steps taken
def displaySteps(steps):
    total_steps = sum(steps)
    print("\nActual number of steps: ", total_steps)
    print("Forward steps: ", steps[0])
    print("Backward steps: ", steps[1])
    print("Left steps: ", steps[2])
    print("Right steps: ", steps[3])
# method to print which quadrant robot is in
def printQuadrant(x, y):
    print("Final quadrant position: ", end = "")
    if(x == 0 and y == 0):
        print("At origin")
    elif(x == 0):
        print("On y-axis")
    elif(y == 0):
        print("On x-axis")
    else:
        if(x > 0 and y > 0):
            print("Quadrant I")
        elif(x < 0 and y > 0):
            print("Quadrant II")
        elif(x < 0 and y < 0):
            print("Quadrant III")
        else:
            print("Quadrant IV")

# method to print details about robot coordinate
def coordinateDetails(steps):
    (x, y) = (0, 0)
    x = steps[3] - steps[2]
    y = steps[0] - steps[1]
    print("\nFinal coordinate position: (" + str(x) + ", " + str(y) + ")")
    printQuadrant(x, y)
    distance_from_origin = math.sqrt(x*x + y*y)
    print("Distance from origin: ", round(distance_from_origin, 2))
    return round(distance_from_origin,2)

# method to find farthest and closest robot
def farthestAndClosest(distance):
    print("\nFarthest robot from origin: ", max(distance))
    print("Closest robot from origin: ", min(distance))

# main
def main():
    robot_num = int(input("Enter number of robots: "))
    distances = []
    for i in range(robot_num):
        print("\n=== Robot" + str(i+1) + " ===")
        sequence = input("Enter step sequence: ")
        steps = countSteps(sequence)
        displaySteps(steps)
        distances.append(coordinateDetails(steps))
    farthestAndClosest(distances)

if __name__ == "__main__":
    main()
