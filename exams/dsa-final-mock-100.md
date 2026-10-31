# ม็อกข้อสอบ Data Structures and Algorithms

ข้อสอบฝึกทำ 100 ข้อ คละบทและสลับลำดับตัวเลือกไว้แล้ว แต่ละข้อมี 1 คะแนน และมีเฉลยอยู่ในไฟล์

```yaml mocktest
{
  "schema_version": 1,
  "exam": {
    "id": "dsa-final-codex-100-20261031",
    "title": "Data Structures and Algorithms — ม็อกข้อสอบคละบท 100 ข้อ",
    "description": "Heap 5, Graphs 19, Algorithm Analysis 5, Searching 19, Sorting 19, Recursion และ Divide and Conquer 18, Greedy และ Dynamic Programming 15 ข้อ"
  },
  "questions": [
    {
      "id": "searching_15",
      "type": "single_choice",
      "points": 1,
      "prompt": "การค้นหาใน BST เริ่มจากราก 40 หากต้องการ 25 และ 25 น้อยกว่า 40 ควรไปทางใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "หยุดโดยไม่พบ"
        },
        {
          "id": "b",
          "text": "ตรวจทั้งสองด้านเสมอ"
        },
        {
          "id": "c",
          "text": "ต้นไม้ย่อยซ้าย"
        },
        {
          "id": "d",
          "text": "ต้นไม้ย่อยขวา"
        }
      ],
      "answer": "c",
      "explanation": "BST เก็บคีย์ที่น้อยกว่าไว้ทางซ้าย"
    },
    {
      "id": "sorting_19",
      "type": "single_choice",
      "points": 1,
      "prompt": "อาร์เรย์ [4, 1, 3, 2] ถ้าจัดกลุ่มโดย pivot=3 และค่าต่างกัน ข้อใดเป็นผลที่เป็นไปได้",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "[4, 3, 2, 1]"
        },
        {
          "id": "b",
          "text": "[4, 1, 3, 2]"
        },
        {
          "id": "c",
          "text": "[1, 2, 3, 4]"
        },
        {
          "id": "d",
          "text": "[3, 4, 2, 1]"
        }
      ],
      "answer": "c",
      "explanation": "หลัง partition ค่าที่น้อยกว่าอยู่ซ้ายและค่าที่มากกว่าอยู่ขวา pivot"
    },
    {
      "id": "searching_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "linear search ค้นหาค่าที่ไม่มีในอาร์เรย์ n ตัว ต้องตรวจอย่างไรในกรณีทั่วไป",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ตรวจครบ n ตัว"
        },
        {
          "id": "b",
          "text": "ไม่ต้องตรวจข้อมูล"
        },
        {
          "id": "c",
          "text": "ตรวจเพียงตัวกลาง"
        },
        {
          "id": "d",
          "text": "ตรวจ log n ตัว"
        }
      ],
      "answer": "a",
      "explanation": "ต้องตรวจทุกตำแหน่งก่อนสรุปว่าไม่มีค่า"
    },
    {
      "id": "sorting_13",
      "type": "single_choice",
      "points": 1,
      "prompt": "หากอาร์เรย์มีจำนวน inversions น้อยมากเมื่อเทียบกับจำนวนสมาชิก อัลกอริทึมเรียงลำดับใดต่อไปนี้เหมาะสม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "insertion sort"
        },
        {
          "id": "b",
          "text": "selection sort ซึ่งเปรียบเทียบคงจำนวนรอบ"
        },
        {
          "id": "c",
          "text": "linear search"
        },
        {
          "id": "d",
          "text": "hashing"
        }
      ],
      "answer": "a",
      "explanation": "insertion sort ใช้เวลา Θ(n + I) โดย I คือจำนวน inversions จึงทำงานได้ดีเมื่อ I มีค่าน้อย"
    },
    {
      "id": "greedydp_06",
      "type": "single_choice",
      "points": 1,
      "prompt": "memoization เก็บอะไรเพื่อหลีกเลี่ยงการคำนวณซ้ำ",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "คีย์ที่สุ่มใหม่ทุกครั้ง"
        },
        {
          "id": "b",
          "text": "เฉพาะชื่อฟังก์ชัน"
        },
        {
          "id": "c",
          "text": "เฉพาะผลลัพธ์ที่ผิด"
        },
        {
          "id": "d",
          "text": "ผลลัพธ์ของปัญหาย่อยที่เคยคำนวณ"
        }
      ],
      "answer": "d",
      "explanation": "เมื่อพบสถานะเดิมสามารถนำผลที่เก็บไว้กลับมาใช้"
    },
    {
      "id": "greedydp_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "0/1 knapsack แตกต่างจาก fractional knapsack อย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เลือกสินค้าแต่ละชิ้นทั้งชิ้นหรือไม่เลือก"
        },
        {
          "id": "b",
          "text": "ต้องเลือกสินค้าทุกชิ้น"
        },
        {
          "id": "c",
          "text": "แบ่งสินค้าได้อย่างอิสระ"
        },
        {
          "id": "d",
          "text": "ห้ามมีข้อจำกัดน้ำหนัก"
        }
      ],
      "answer": "a",
      "explanation": "0/1 หมายถึงตัดสินใจหยิบทั้งชิ้นหรือไม่หยิบ"
    },
    {
      "id": "greedydp_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "สำหรับเหรียญ 1, 3, 4 ที่มีอย่างละไม่จำกัด และเป้าหมาย 6 คำตอบที่ใช้เหรียญน้อยที่สุดคือข้อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "4+1+1"
        },
        {
          "id": "b",
          "text": "3+3"
        },
        {
          "id": "c",
          "text": "4+3"
        },
        {
          "id": "d",
          "text": "1+1+1+1+1+1"
        }
      ],
      "answer": "b",
      "explanation": "3+3 รวม 6 และใช้เพียง 2 เหรียญ"
    },
    {
      "id": "graphs_09",
      "type": "single_choice",
      "points": 1,
      "prompt": "ในกราฟไม่มีน้ำหนัก BFS ใช้หาอะไรจากจุดเริ่มต้นได้",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "จำนวนเส้นเชื่อมน้อยที่สุดไปยังแต่ละจุดที่เข้าถึงได้"
        },
        {
          "id": "b",
          "text": "เส้นทางที่มีน้ำหนักน้อยที่สุดเมื่อมีน้ำหนักติดลบ"
        },
        {
          "id": "c",
          "text": "ทุกเส้นทางที่เป็นไปได้อย่างมีประสิทธิภาพเสมอ"
        },
        {
          "id": "d",
          "text": "minimum spanning tree ของกราฟถ่วงน้ำหนักเสมอ"
        }
      ],
      "answer": "a",
      "explanation": "BFS สำรวจเป็นชั้นตามระยะจำนวนเส้นเชื่อม"
    },
    {
      "id": "greedydp_09",
      "type": "single_choice",
      "points": 1,
      "prompt": "ใน activity selection ที่ต้องการจำนวนกิจกรรมไม่ทับซ้อนสูงสุด กลยุทธ์มาตรฐานเลือกกิจกรรมใดก่อน",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "กิจกรรมที่ชื่อสั้นที่สุด"
        },
        {
          "id": "b",
          "text": "กิจกรรมที่จบเร็วที่สุดในบรรดาที่เข้ากันได้"
        },
        {
          "id": "c",
          "text": "กิจกรรมที่ยาวที่สุด"
        },
        {
          "id": "d",
          "text": "กิจกรรมที่เริ่มช้าที่สุดเสมอ"
        }
      ],
      "answer": "b",
      "explanation": "การเลือกเวลาจบเร็วเปิดพื้นที่ให้กิจกรรมที่เหลือได้มากที่สุด"
    },
    {
      "id": "graphs_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางที่มี 4 จุดยอด แต่ไม่มีเส้นเชื่อมเลย มี connected component กี่กลุ่ม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "0"
        },
        {
          "id": "c",
          "text": "4"
        },
        {
          "id": "d",
          "text": "1"
        }
      ],
      "answer": "c",
      "explanation": "แต่ละจุดยอดแยกเดี่ยวเป็นหนึ่ง component"
    },
    {
      "id": "sorting_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดถูกต้องสำหรับอัลกอริทึมเรียงลำดับแบบมาตรฐาน",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "insertion sort เป็น stable เมื่อจัดการค่าที่เท่ากันตามปกติ"
        },
        {
          "id": "b",
          "text": "merge sort มี worst-case Θ(n log n)"
        },
        {
          "id": "c",
          "text": "selection sort ทุกแบบต้อง stable"
        },
        {
          "id": "d",
          "text": "quick sort อาจมี worst-case Θ(n²)"
        }
      ],
      "answer": [
        "a",
        "b",
        "d"
      ],
      "explanation": "merge sort มีเวลาตามที่ระบุ quick sort อาจแบ่งไม่สมดุล และ insertion sort มาตรฐานคงลำดับคีย์เท่ากัน; selection sort ทั่วไปไม่ stable"
    },
    {
      "id": "searching_17",
      "type": "single_choice",
      "points": 1,
      "prompt": "AVL tree ซึ่งมี n โหนด มีความสูงในขอบเขตแน่น Θ ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(1) สำหรับทุก n"
        },
        {
          "id": "b",
          "text": "Θ(log n)"
        },
        {
          "id": "c",
          "text": "Θ(n²)"
        },
        {
          "id": "d",
          "text": "Θ(2ⁿ)"
        }
      ],
      "answer": "b",
      "explanation": "AVL tree มีความสูง Θ(log n) จากเงื่อนไขสมดุล และต้นไม้ทวิภาคที่มี n โหนดมีความสูงอย่างน้อยระดับ log n"
    },
    {
      "id": "sorting_17",
      "type": "single_choice",
      "points": 1,
      "prompt": "merge sort แบบอาร์เรย์ที่ใช้บัฟเฟอร์ชั่วคราวขนาด n ใช้หน่วยความจำเสริมในขอบเขตแน่น Θ ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(1) เสมอ"
        },
        {
          "id": "b",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "c",
          "text": "Θ(n²)"
        },
        {
          "id": "d",
          "text": "Θ(n)"
        }
      ],
      "answer": "d",
      "explanation": "บัฟเฟอร์ชั่วคราวขนาด n ใช้พื้นที่ Θ(n) และพื้นที่ stack ของ recursion ไม่เปลี่ยนขอบเขตนี้"
    },
    {
      "id": "searching_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "binary search ใช้ได้โดยตรงกับอาร์เรย์เมื่อมีเงื่อนไขใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "มีจำนวนสมาชิกเป็นกำลังสอง"
        },
        {
          "id": "b",
          "text": "เรียงลำดับตามคีย์ที่ค้นหา"
        },
        {
          "id": "c",
          "text": "ไม่มีค่าซ้ำ"
        },
        {
          "id": "d",
          "text": "มีข้อมูลไม่เกิน 100 ตัว"
        }
      ],
      "answer": "b",
      "explanation": "ต้องอาศัยลำดับเพื่อทิ้งครึ่งที่ไม่มีเป้าหมาย"
    },
    {
      "id": "recursion_08",
      "type": "single_choice",
      "points": 1,
      "prompt": "กำหนด f(0)=0 และ f(n)=n+f(n-1) สำหรับ n>0 ค่า f(3) เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "6"
        },
        {
          "id": "c",
          "text": "9"
        },
        {
          "id": "d",
          "text": "5"
        }
      ],
      "answer": "b",
      "explanation": "3+2+1+0=6"
    },
    {
      "id": "recursion_09",
      "type": "single_choice",
      "points": 1,
      "prompt": "ฟังก์ชันเรียกตัวเองเพียงหนึ่งครั้งด้วย n-1 ไปจนถึง n=0 โดยไม่มี tail-call optimization จำนวน stack frame พร้อมกันมากที่สุดมีขอบเขตแน่น Θ ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(1)"
        },
        {
          "id": "b",
          "text": "Θ(n²)"
        },
        {
          "id": "c",
          "text": "Θ(log n)"
        },
        {
          "id": "d",
          "text": "Θ(n)"
        }
      ],
      "answer": "d",
      "explanation": "ขณะถึงกรณีฐานมี frame ของ n, n-1, …, 0 รวม n+1 frame จึงเป็น Θ(n)"
    },
    {
      "id": "graphs_06",
      "type": "single_choice",
      "points": 1,
      "prompt": "ใน directed graph เส้นเชื่อม A→B เพิ่มค่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "out-degree ทั้งสองจุด"
        },
        {
          "id": "b",
          "text": "in-degree ทั้งสองจุด"
        },
        {
          "id": "c",
          "text": "in-degree ของ A และ out-degree ของ B"
        },
        {
          "id": "d",
          "text": "out-degree ของ A และ in-degree ของ B"
        }
      ],
      "answer": "d",
      "explanation": "เส้นออกจาก A และเข้าสู่ B"
    },
    {
      "id": "analysis_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดมีอัตราการเติบโตเป็น O(n²) เมื่อ n เพิ่มขึ้น",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "2ⁿ"
        },
        {
          "id": "b",
          "text": "3n²+2n"
        },
        {
          "id": "c",
          "text": "n log₂ n สำหรับ n≥2"
        },
        {
          "id": "d",
          "text": "n³"
        }
      ],
      "answer": [
        "b",
        "c"
      ],
      "explanation": "ทั้ง 3n²+2n และ n log n มีขอบเขตบน O(n²) ส่วน 2ⁿ และ n³ เติบโตเร็วกว่า n²"
    },
    {
      "id": "recursion_18",
      "type": "single_choice",
      "points": 1,
      "prompt": "ข้อใดเป็นตัวอย่าง divide and conquer",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ตรวจสมาชิกทุกตัวทีละตัวโดยไม่แบ่งปัญหา"
        },
        {
          "id": "b",
          "text": "เลือกเหรียญมูลค่าสูงสุดซ้ำโดยไม่แบ่งปัญหา"
        },
        {
          "id": "c",
          "text": "เก็บข้อมูลใน hash table"
        },
        {
          "id": "d",
          "text": "แบ่งอาร์เรย์สองครึ่ง เรียงแต่ละครึ่ง แล้วรวมผล"
        }
      ],
      "answer": "d",
      "explanation": "merge sort แบ่ง แก้ปัญหาย่อย และรวมผล"
    },
    {
      "id": "graphs_13",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟเชื่อมต่อไม่มีทิศทางที่มี 6 จุดยอด spanning tree จะมีเส้นเชื่อมกี่เส้น",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "6"
        },
        {
          "id": "b",
          "text": "15"
        },
        {
          "id": "c",
          "text": "5"
        },
        {
          "id": "d",
          "text": "3"
        }
      ],
      "answer": "c",
      "explanation": "ต้นไม้ที่มี V จุดมี V-1 เส้นเชื่อม"
    },
    {
      "id": "searching_09",
      "type": "single_choice",
      "points": 1,
      "prompt": "เมื่อคีย์ต่างกันให้ค่า hash เดียวกัน เรียกว่าอะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "rotation"
        },
        {
          "id": "b",
          "text": "partition"
        },
        {
          "id": "c",
          "text": "collision"
        },
        {
          "id": "d",
          "text": "memoization"
        }
      ],
      "answer": "c",
      "explanation": "collision คือคีย์หลายตัวถูกแมปไปตำแหน่งเดียวกัน"
    },
    {
      "id": "searching_08",
      "type": "single_choice",
      "points": 1,
      "prompt": "hash table ขนาด 11 ใช้ h(k)=k mod 11 คีย์ 27 อยู่ที่ค่า hash ใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "6"
        },
        {
          "id": "b",
          "text": "5"
        },
        {
          "id": "c",
          "text": "8"
        },
        {
          "id": "d",
          "text": "2"
        }
      ],
      "answer": "b",
      "explanation": "27 mod 11 เท่ากับ 5"
    },
    {
      "id": "recursion_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "recursive call แต่ละครั้งโดยทั่วไปเก็บข้อมูลใดใน call stack",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เฉพาะค่าคงที่ทั่วทั้งโปรแกรม"
        },
        {
          "id": "b",
          "text": "เฉพาะไฟล์ในดิสก์"
        },
        {
          "id": "c",
          "text": "ข้อมูลทุกโปรแกรมในเครื่อง"
        },
        {
          "id": "d",
          "text": "ตัวแปรเฉพาะและตำแหน่งที่จะกลับ"
        }
      ],
      "answer": "d",
      "explanation": "แต่ละ stack frame เก็บสถานะที่จำเป็นต่อการกลับมาทำงาน"
    },
    {
      "id": "graphs_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "ข้อใดเป็นประโยชน์หลักของ DFS",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "หา median ของจุดยอด"
        },
        {
          "id": "b",
          "text": "เรียงข้อมูลในอาร์เรย์"
        },
        {
          "id": "c",
          "text": "สำรวจเส้นทางลึกก่อนย้อนกลับ"
        },
        {
          "id": "d",
          "text": "รับประกันเส้นทางสั้นที่สุดในกราฟถ่วงน้ำหนัก"
        }
      ],
      "answer": "c",
      "explanation": "DFS เดินตามทางเลือกจนไปต่อไม่ได้แล้วจึงย้อนกลับ"
    },
    {
      "id": "graphs_11",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางมีเส้นเชื่อม AE=1, CD=2, AB=3, BE=4, BC=5, CE=6 และ DE=7 หากใช้ Kruskal เส้นเชื่อมสองเส้นแรกที่เลือกคือข้อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "AB และ BE"
        },
        {
          "id": "b",
          "text": "CD และ AB"
        },
        {
          "id": "c",
          "text": "AE และ CD"
        },
        {
          "id": "d",
          "text": "AE และ DE"
        }
      ],
      "answer": "c",
      "explanation": "Kruskal พิจารณาน้ำหนักน้อยไปมาก จึงเลือก AE=1 และ CD=2 ก่อน โดยทั้งสองเส้นไม่ทำให้เกิดวงจร"
    },
    {
      "id": "recursion_07",
      "type": "single_choice",
      "points": 1,
      "prompt": "การเรียกซ้ำที่ทำงานอื่นต่อหลังฟังก์ชันย่อยกลับมา เช่น return 1+f(n-1) เป็น tail recursion หรือไม่",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ตัดสินได้จากชื่อฟังก์ชัน"
        },
        {
          "id": "b",
          "text": "เป็นเสมอ"
        },
        {
          "id": "c",
          "text": "เป็นเมื่อ n เป็นเลขคู่เท่านั้น"
        },
        {
          "id": "d",
          "text": "ไม่เป็น"
        }
      ],
      "answer": "d",
      "explanation": "ยังต้องบวก 1 หลัง recursive call กลับมา"
    },
    {
      "id": "graphs_16",
      "type": "single_choice",
      "points": 1,
      "prompt": "ในกราฟไม่มีทิศทางที่มีน้ำหนัก A-B=2, B-C=3, A-C=9 ระยะทางสั้นที่สุดจาก A ถึง C เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "11"
        },
        {
          "id": "b",
          "text": "14"
        },
        {
          "id": "c",
          "text": "5"
        },
        {
          "id": "d",
          "text": "9"
        }
      ],
      "answer": "c",
      "explanation": "เส้นทางผ่าน B มีน้ำหนักรวม 2+3=5"
    },
    {
      "id": "recursion_06",
      "type": "single_choice",
      "points": 1,
      "prompt": "เมื่อ f(3) เรียก f(2) และ f(2) เรียก f(1) ฟังก์ชันใดกลับก่อน",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "f(1)"
        },
        {
          "id": "b",
          "text": "f(2)"
        },
        {
          "id": "c",
          "text": "f(3)"
        },
        {
          "id": "d",
          "text": "กลับพร้อมกัน"
        }
      ],
      "answer": "a",
      "explanation": "call stack ทำงานแบบ last in first out"
    },
    {
      "id": "sorting_14",
      "type": "single_choice",
      "points": 1,
      "prompt": "หาก quick sort แบ่งข้อมูลสมดุลทุกครั้ง เวลาโดยรวมเป็นระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n²)"
        },
        {
          "id": "b",
          "text": "Θ(1)"
        },
        {
          "id": "c",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "d",
          "text": "Θ(n log n)"
        }
      ],
      "answer": "d",
      "explanation": "มี log n ระดับและ partition รวม Θ(n) ต่อระดับ"
    },
    {
      "id": "greedydp_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "fractional knapsack สามารถแบ่งสินค้าได้ เกณฑ์ greedy ที่เหมาะสมคืออะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เลือกมูลค่าต่อน้ำหนักสูงสุดก่อน"
        },
        {
          "id": "b",
          "text": "เลือกน้ำหนักมากที่สุดก่อนเสมอ"
        },
        {
          "id": "c",
          "text": "เลือกมูลค่ารวมต่ำสุดก่อน"
        },
        {
          "id": "d",
          "text": "เลือกสินค้าชิ้นแรกเสมอ"
        }
      ],
      "answer": "a",
      "explanation": "การเลือกมูลค่าต่อหน่วยน้ำหนักสูงสุดให้คำตอบเหมาะที่สุดสำหรับ fractional knapsack"
    },
    {
      "id": "searching_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดถูกต้องเกี่ยวกับการค้นหา",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "binary search แบบปกติต้องอาศัยข้อมูลที่เรียงตามคีย์"
        },
        {
          "id": "b",
          "text": "linear search ใช้กับอาร์เรย์ที่ยังไม่เรียงได้"
        },
        {
          "id": "c",
          "text": "binary search ต้องตรวจทุกตำแหน่งเสมอ"
        },
        {
          "id": "d",
          "text": "hash collision เกิดได้กับคีย์ต่างกัน"
        }
      ],
      "answer": [
        "a",
        "b",
        "d"
      ],
      "explanation": "linear search ไม่ต้องเรียง ขณะที่ binary search ใช้ลำดับเพื่อตัดช่วง และคีย์ต่างกันอาจ hash ชนกัน"
    },
    {
      "id": "recursion_11",
      "type": "single_choice",
      "points": 1,
      "prompt": "หอคอยฮานอย 4 จาน ต้องย้ายอย่างน้อยกี่ครั้ง",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "12"
        },
        {
          "id": "b",
          "text": "8"
        },
        {
          "id": "c",
          "text": "16"
        },
        {
          "id": "d",
          "text": "15"
        }
      ],
      "answer": "d",
      "explanation": "จำนวนครั้งน้อยสุดคือ 2⁴-1=15"
    },
    {
      "id": "greedydp_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "กระเป๋าบรรจุได้ 5 หน่วย สินค้า A น้ำหนัก 2 มูลค่า 6 และ B น้ำหนัก 3 มูลค่า 9 ใน 0/1 knapsack มูลค่าสูงสุดเท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "9"
        },
        {
          "id": "b",
          "text": "18"
        },
        {
          "id": "c",
          "text": "12"
        },
        {
          "id": "d",
          "text": "15"
        }
      ],
      "answer": "d",
      "explanation": "เลือกทั้ง A และ B ได้พอดี น้ำหนัก 5 และมูลค่า 15"
    },
    {
      "id": "graphs_18",
      "type": "single_choice",
      "points": 1,
      "prompt": "adjacency matrix แบบเต็มสำหรับกราฟ V จุดยอด ใช้พื้นที่ในขอบเขตแน่น Θ ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(log V)"
        },
        {
          "id": "b",
          "text": "Θ(V+E) เสมอ"
        },
        {
          "id": "c",
          "text": "Θ(1)"
        },
        {
          "id": "d",
          "text": "Θ(V²)"
        }
      ],
      "answer": "d",
      "explanation": "ตารางมี V แถวและ V คอลัมน์ จึงใช้พื้นที่ Θ(V²)"
    },
    {
      "id": "searching_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "binary search ใน [2, 4, 6, 8, 10] เมื่อค้นหา 10 และตรวจ 6 แล้วควรค้นหาช่วงใดต่อ",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ด้านขวาของ 6"
        },
        {
          "id": "b",
          "text": "ทั้งสองด้าน"
        },
        {
          "id": "c",
          "text": "ด้านซ้ายของ 6"
        },
        {
          "id": "d",
          "text": "หยุดทันทีว่าไม่พบ"
        }
      ],
      "answer": "a",
      "explanation": "อาร์เรย์เรียงเพิ่มและ 10 มากกว่า 6"
    },
    {
      "id": "greedydp_08",
      "type": "single_choice",
      "points": 1,
      "prompt": "Fibonacci แบบ DP ที่คำนวณ F(0) ถึง F(n) ทีละค่าครั้งเดียว โดยนับการบวกแต่ละครั้งเป็นเวลาคงที่ มีเวลาในขอบเขตแน่น Θ ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n)"
        },
        {
          "id": "b",
          "text": "Θ(1) สำหรับทุก n"
        },
        {
          "id": "c",
          "text": "Θ(n²) จำเป็นเสมอ"
        },
        {
          "id": "d",
          "text": "Θ(2ⁿ)"
        }
      ],
      "answer": "a",
      "explanation": "มี Θ(n) สถานะและแต่ละสถานะใช้เวลาคงที่ภายใต้แบบจำลองที่กำหนด"
    },
    {
      "id": "graphs_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "ถ้า BFS เริ่มจาก A ในกราฟที่มี A-B, A-C, B-D โดยสำรวจ B ก่อน C จุดใดอยู่ห่างจาก A สองเส้นเชื่อม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "A"
        },
        {
          "id": "b",
          "text": "B"
        },
        {
          "id": "c",
          "text": "C"
        },
        {
          "id": "d",
          "text": "D"
        }
      ],
      "answer": "d",
      "explanation": "เส้นทางที่สั้นที่สุดจาก A ถึง D คือ A-B-D"
    },
    {
      "id": "graphs_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางมีเส้นเชื่อม A-B, A-C, B-C จุด A มี degree เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "2"
        },
        {
          "id": "b",
          "text": "1"
        },
        {
          "id": "c",
          "text": "3"
        },
        {
          "id": "d",
          "text": "4"
        }
      ],
      "answer": "a",
      "explanation": "มีเส้นเชื่อมที่ติดกับ A สองเส้น"
    },
    {
      "id": "sorting_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "selection sort เรียงเพิ่ม [5, 3, 4, 1] หลังรอบแรกที่เลือกค่าน้อยสุดและสลับกับตำแหน่งแรกได้อะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "[1, 4, 3, 5]"
        },
        {
          "id": "b",
          "text": "[1, 3, 4, 5]"
        },
        {
          "id": "c",
          "text": "[3, 4, 1, 5]"
        },
        {
          "id": "d",
          "text": "[1, 3, 5, 4]"
        }
      ],
      "answer": "b",
      "explanation": "ค่าน้อยสุดคือ 1 สลับกับ 5"
    },
    {
      "id": "recursion_13",
      "type": "single_choice",
      "points": 1,
      "prompt": "สมการ T(n)=T(n/2)+Θ(1) และ T(1)=Θ(1) มีผลลัพธ์ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n)"
        },
        {
          "id": "b",
          "text": "Θ(n²)"
        },
        {
          "id": "c",
          "text": "Θ(n log n)"
        },
        {
          "id": "d",
          "text": "Θ(log n)"
        }
      ],
      "answer": "d",
      "explanation": "ขนาดปัญหาลดครึ่งในแต่ละขั้นโดยทำงานคงที่"
    },
    {
      "id": "sorting_06",
      "type": "single_choice",
      "points": 1,
      "prompt": "stable sort หมายถึงอะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "สมาชิกที่มีคีย์เท่ากันคงลำดับสัมพัทธ์เดิม"
        },
        {
          "id": "b",
          "text": "ใช้เวลาเท่ากันทุกอินพุต"
        },
        {
          "id": "c",
          "text": "ต้องใช้พื้นที่ O(1)"
        },
        {
          "id": "d",
          "text": "ห้ามมีคีย์ซ้ำ"
        }
      ],
      "answer": "a",
      "explanation": "stability รักษาลำดับเดิมของสมาชิกที่คีย์เท่ากัน"
    },
    {
      "id": "searching_19",
      "type": "single_choice",
      "points": 1,
      "prompt": "การ rehash หลังขยายตารางต้องทำอะไรกับคีย์เดิม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "คำนวณตำแหน่งใหม่แล้วใส่ลงตารางใหม่"
        },
        {
          "id": "b",
          "text": "คงทุกคีย์ใน index เดิมเสมอ"
        },
        {
          "id": "c",
          "text": "เรียงคีย์แทนการ hash"
        },
        {
          "id": "d",
          "text": "ลบคีย์เดิมทั้งหมดโดยไม่ย้าย"
        }
      ],
      "answer": "a",
      "explanation": "การเปลี่ยนขนาดตารางอาจเปลี่ยนค่า index ที่คำนวณได้"
    },
    {
      "id": "analysis_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "โค้ดหาร n ด้วย 2 ซ้ำจน n ไม่เกิน 1 โดยทำงานคงที่ต่อรอบใช้เวลาเท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n²)"
        },
        {
          "id": "b",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "c",
          "text": "Θ(log n)"
        },
        {
          "id": "d",
          "text": "Θ(n)"
        }
      ],
      "answer": "c",
      "explanation": "หารครึ่งได้ประมาณ log₂ n ครั้ง"
    },
    {
      "id": "searching_11",
      "type": "single_choice",
      "points": 1,
      "prompt": "ตารางขนาด 7 ใช้ h(k)=k mod 7 และ linear probing ใส่ 8 แล้ว 15 โดยเริ่มจากตารางว่าง 15 อยู่ช่องใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "2"
        },
        {
          "id": "c",
          "text": "0"
        },
        {
          "id": "d",
          "text": "1"
        }
      ],
      "answer": "b",
      "explanation": "ทั้งคู่เริ่มที่ 1 และ 15 เลื่อนไปช่องว่างถัดไปคือ 2"
    },
    {
      "id": "graphs_17",
      "type": "single_choice",
      "points": 1,
      "prompt": "adjacency list เหมาะเป็นพิเศษเมื่อกราฟมีลักษณะใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "มีเส้นเชื่อมทุกคู่เสมอ"
        },
        {
          "id": "b",
          "text": "ไม่มีจุดยอด"
        },
        {
          "id": "c",
          "text": "มีเส้นเชื่อมน้อยเมื่อเทียบกับจำนวนคู่จุดยอด"
        },
        {
          "id": "d",
          "text": "ต้องเก็บตาราง V×V เสมอ"
        }
      ],
      "answer": "c",
      "explanation": "ใช้พื้นที่ O(V+E) จึงประหยัดใน sparse graph"
    },
    {
      "id": "greedydp_14",
      "type": "single_choice",
      "points": 1,
      "prompt": "Huffman coding เลือกรวมโหนดลักษณะใดในแต่ละขั้นของวิธีมาตรฐาน",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "สองโหนดที่มีความถี่สูงสุด"
        },
        {
          "id": "b",
          "text": "สองโหนดที่มีความถี่ต่ำสุด"
        },
        {
          "id": "c",
          "text": "โหนดแรกและสุดท้ายตามตัวอักษร"
        },
        {
          "id": "d",
          "text": "ทุกโหนดพร้อมกัน"
        }
      ],
      "answer": "b",
      "explanation": "วิธี greedy รวมความถี่น้อยที่สุดสองค่าแล้วใส่ผลรวมกลับ"
    },
    {
      "id": "sorting_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "merge sort แบ่งข้อมูลจนเหลือปัญหาขนาดใดเป็นกรณีฐานตามปกติ",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ขนาดติดลบ"
        },
        {
          "id": "b",
          "text": "ขนาดเท่ากับข้อมูลเริ่มต้น"
        },
        {
          "id": "c",
          "text": "ขนาด 0 หรือ 1"
        },
        {
          "id": "d",
          "text": "ขนาด 10 เสมอ"
        }
      ],
      "answer": "c",
      "explanation": "ลิสต์ว่างหรือสมาชิกเดียวเรียงอยู่แล้ว"
    },
    {
      "id": "recursion_15",
      "type": "single_choice",
      "points": 1,
      "prompt": "ขั้น combine ใน merge sort มีหน้าที่ใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ลบสมาชิกทั้งหมด"
        },
        {
          "id": "b",
          "text": "เลือก pivot แล้วแบ่งข้อมูล"
        },
        {
          "id": "c",
          "text": "คำนวณ hash"
        },
        {
          "id": "d",
          "text": "รวมลิสต์ย่อยที่เรียงแล้วเป็นลิสต์เรียง"
        }
      ],
      "answer": "d",
      "explanation": "merge ใช้ลำดับของแต่ละลิสต์ย่อยเพื่อรวมผล"
    },
    {
      "id": "greedydp_11",
      "type": "single_choice",
      "points": 1,
      "prompt": "ข้อใดอธิบาย overlapping subproblems",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ปัญหาย่อยสถานะเดิมปรากฏซ้ำในการคำนวณ"
        },
        {
          "id": "b",
          "text": "ทุกอัลกอริทึมมีเวลาคงที่"
        },
        {
          "id": "c",
          "text": "ปัญหาย่อยห้ามมีคำตอบ"
        },
        {
          "id": "d",
          "text": "ปัญหาย่อยทุกปัญหาต่างกันเสมอ"
        }
      ],
      "answer": "a",
      "explanation": "การเกิดสถานะซ้ำทำให้การเก็บผลมีประโยชน์"
    },
    {
      "id": "recursion_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "ฟังก์ชันเรียกตัวเองโดยไม่มีกรณีฐานที่เข้าถึงได้อาจเกิดอะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "คืนค่าถูกต้องเสมอ"
        },
        {
          "id": "b",
          "text": "เรียกซ้ำจน stack เต็ม"
        },
        {
          "id": "c",
          "text": "ใช้หน่วยความจำคงที่เสมอ"
        },
        {
          "id": "d",
          "text": "กลายเป็น binary search"
        }
      ],
      "answer": "b",
      "explanation": "ไม่มีเงื่อนไขหยุดจึงอาจใช้ call stack จนหมด"
    },
    {
      "id": "analysis_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "ถ้าจำนวนขั้นตอน T(n)=3n²+2n+5 และเพิ่ม n เป็นสองเท่า อัตราส่วน T(2n)/T(n) เข้าใกล้เท่าใดเมื่อ n ใหญ่มาก",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เท่าเดิม"
        },
        {
          "id": "b",
          "text": "8 เท่า"
        },
        {
          "id": "c",
          "text": "4 เท่า"
        },
        {
          "id": "d",
          "text": "2 เท่า"
        }
      ],
      "answer": "c",
      "explanation": "T(2n)/T(n) = (12n²+4n+5)/(3n²+2n+5) เข้าใกล้ 4 เมื่อ n เพิ่มขึ้น"
    },
    {
      "id": "greedydp_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดกล่าวถูกต้องเกี่ยวกับ dynamic programming",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "การเก็บผลปัญหาย่อยช่วยหลีกเลี่ยงการคำนวณสถานะเดิมซ้ำ"
        },
        {
          "id": "b",
          "text": "tabulation มักเริ่มจากสถานะฐานแล้วเติมตาราง"
        },
        {
          "id": "c",
          "text": "ทุกปัญหาที่ใช้ DP ต้องใช้ greedy แล้วได้ผลเหมาะที่สุด"
        },
        {
          "id": "d",
          "text": "memoization เก็บผลปัญหาย่อยที่คำนวณแล้ว"
        }
      ],
      "answer": [
        "a",
        "b",
        "d"
      ],
      "explanation": "ทั้ง memoization และ tabulation นำผลย่อยมาใช้ซ้ำ แต่การใช้ DP ไม่ได้แปลว่า greedy ใช้ได้เสมอ"
    },
    {
      "id": "recursion_14",
      "type": "single_choice",
      "points": 1,
      "prompt": "สมการ T(n)=T(n-1)+Θ(1) และ T(1)=Θ(1) มีผลลัพธ์ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n²)"
        },
        {
          "id": "b",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "c",
          "text": "Θ(log n)"
        },
        {
          "id": "d",
          "text": "Θ(n)"
        }
      ],
      "answer": "d",
      "explanation": "มีการลดขนาดทีละ 1 รวมประมาณ n ขั้น"
    },
    {
      "id": "recursion_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "กำหนด f(0)=1 และ f(n)=f(n-1)+1 ค่า f(2) เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "4"
        },
        {
          "id": "b",
          "text": "3"
        },
        {
          "id": "c",
          "text": "1"
        },
        {
          "id": "d",
          "text": "2"
        }
      ],
      "answer": "b",
      "explanation": "f(1)=2 และ f(2)=3"
    },
    {
      "id": "sorting_11",
      "type": "single_choice",
      "points": 1,
      "prompt": "heap sort เรียงเพิ่มโดยใช้ max-heap หลังสลับรากกับตำแหน่งท้ายของส่วน heap จะได้อะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ค่าน้อยสุดอยู่ตำแหน่งแรกเสมอ"
        },
        {
          "id": "b",
          "text": "จำนวนสมาชิกเพิ่มขึ้น"
        },
        {
          "id": "c",
          "text": "ข้อมูลเรียงครบทุกตำแหน่งทันที"
        },
        {
          "id": "d",
          "text": "ค่าสูงสุดของส่วน heap อยู่ตำแหน่งท้าย"
        }
      ],
      "answer": "d",
      "explanation": "ราก max-heap คือค่าสูงสุดของส่วนที่ยังไม่เรียง"
    },
    {
      "id": "searching_07",
      "type": "single_choice",
      "points": 1,
      "prompt": "binary search แบบช่วงปิดสรุปว่าไม่พบเป้าหมายเมื่อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "low มากกว่า high"
        },
        {
          "id": "b",
          "text": "mid เป็นศูนย์"
        },
        {
          "id": "c",
          "text": "low เท่ากับ high"
        },
        {
          "id": "d",
          "text": "ตรวจค่ากลางครั้งแรก"
        }
      ],
      "answer": "a",
      "explanation": "เมื่อ low>high ไม่มีตำแหน่งเหลือให้ค้นหา"
    },
    {
      "id": "heap_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดถูกต้องสำหรับ binary min-heap ที่ไม่ว่าง",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "ต้องเป็น binary search tree เสมอ"
        },
        {
          "id": "b",
          "text": "ข้อมูลต้องเรียงจากน้อยไปมากทั้งอาร์เรย์"
        },
        {
          "id": "c",
          "text": "ค่าที่รากน้อยที่สุดหรือเท่าค่าน้อยที่สุด"
        },
        {
          "id": "d",
          "text": "รากมีค่าไม่มากกว่าลูก"
        }
      ],
      "answer": [
        "c",
        "d"
      ],
      "explanation": "สมบัติ min-heap เปรียบเทียบพ่อกับลูก จึงทำให้รากมีค่าน้อยที่สุด แต่ไม่ได้เรียงทั้งอาร์เรย์และไม่จำเป็นต้องเป็น BST"
    },
    {
      "id": "graphs_12",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางมีเส้นเชื่อม AE=1, AB=3, BE=4, BC=5, CD=2, CE=6 และ DE=7 หากใช้ Prim เริ่มที่ A เส้นเชื่อมสองเส้นแรกที่เลือกคือข้อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "AE และ AB"
        },
        {
          "id": "b",
          "text": "CD และ AE"
        },
        {
          "id": "c",
          "text": "AE และ CD"
        },
        {
          "id": "d",
          "text": "AB และ BC"
        }
      ],
      "answer": "a",
      "explanation": "จาก A เลือก AE=1 ก่อน จากนั้นพิจารณาเส้นที่เชื่อมจาก {A,E} ออกไป เลือก AB=3 ซึ่งมีน้ำหนักต่ำสุด"
    },
    {
      "id": "searching_12",
      "type": "single_choice",
      "points": 1,
      "prompt": "linear probing หากตรวจถึงช่องสุดท้ายของตารางแล้วยังชน จะตรวจช่องใดต่อ",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ลบทุกคีย์"
        },
        {
          "id": "b",
          "text": "ช่องแรกโดยวนกลับ"
        },
        {
          "id": "c",
          "text": "หยุดโดยไม่ตรวจช่องแรก"
        },
        {
          "id": "d",
          "text": "ช่องสุดท้ายซ้ำตลอด"
        }
      ],
      "answer": "b",
      "explanation": "ดัชนี probing คำนวณแบบ modulo ขนาดตาราง"
    },
    {
      "id": "graphs_19",
      "type": "single_choice",
      "points": 1,
      "prompt": "เมื่อต้องหา shortest path จากจุดเริ่มต้นในกราฟมีทิศทางที่อาจมีเส้นเชื่อมน้ำหนักติดลบ แต่ไม่มี negative cycle ที่เข้าถึงได้ ควรเลือกอัลกอริทึมใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Prim"
        },
        {
          "id": "b",
          "text": "Bellman–Ford"
        },
        {
          "id": "c",
          "text": "Kruskal"
        },
        {
          "id": "d",
          "text": "Dijkstra แบบมาตรฐาน"
        }
      ],
      "answer": "b",
      "explanation": "Bellman–Ford รองรับน้ำหนักติดลบและหาเส้นทางสั้นที่สุดได้เมื่อไม่มี negative cycle ที่เข้าถึงจากต้นทาง ส่วน Dijkstra แบบมาตรฐานไม่รับประกันผลถูกต้องสำหรับน้ำหนักติดลบ"
    },
    {
      "id": "graphs_07",
      "type": "single_choice",
      "points": 1,
      "prompt": "adjacency matrix ของกราฟไม่มีทิศทางทั่วไปมีลักษณะใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ทุกช่องเป็น 1"
        },
        {
          "id": "b",
          "text": "สมมาตรเทียบกับแนวทแยง"
        },
        {
          "id": "c",
          "text": "ทุกช่องเป็น 0"
        },
        {
          "id": "d",
          "text": "มีเพียงหนึ่งแถว"
        }
      ],
      "answer": "b",
      "explanation": "A เชื่อม B ก็ต่อเมื่อ B เชื่อม A"
    },
    {
      "id": "searching_16",
      "type": "single_choice",
      "points": 1,
      "prompt": "BST ที่มีราก 40 ลูกซ้าย 20 และลูกขวาของ 20 คือ 30 ค้นหา 30 ผ่านลำดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "20, 40, 30"
        },
        {
          "id": "b",
          "text": "40, 20, 30"
        },
        {
          "id": "c",
          "text": "40, 30, 20"
        },
        {
          "id": "d",
          "text": "30, 20, 40"
        }
      ],
      "answer": "b",
      "explanation": "30 น้อยกว่า 40 แต่มากกว่า 20"
    },
    {
      "id": "greedydp_10",
      "type": "single_choice",
      "points": 1,
      "prompt": "กิจกรรม A=[1,3), B=[2,5), C=[3,4) เลือกได้มากสุดกี่กิจกรรมเมื่อปลายช่วงชนกันได้",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "2"
        },
        {
          "id": "b",
          "text": "3"
        },
        {
          "id": "c",
          "text": "1"
        },
        {
          "id": "d",
          "text": "0"
        }
      ],
      "answer": "a",
      "explanation": "เลือก A และ C ได้เพราะ A จบตรงเวลาที่ C เริ่ม"
    },
    {
      "id": "sorting_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "bubble sort เรียงเพิ่ม [3, 1, 2] เมื่อเปรียบเทียบคู่ติดกันจากซ้ายไปขวาครบหนึ่งรอบ ได้อะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "[2, 1, 3]"
        },
        {
          "id": "b",
          "text": "[1, 2, 3]"
        },
        {
          "id": "c",
          "text": "[1, 3, 2]"
        },
        {
          "id": "d",
          "text": "[3, 2, 1]"
        }
      ],
      "answer": "b",
      "explanation": "สลับ 3 กับ 1 แล้วสลับ 3 กับ 2"
    },
    {
      "id": "sorting_07",
      "type": "single_choice",
      "points": 1,
      "prompt": "insertion sort แบบมาตรฐานมีเวลาที่ดีที่สุดเท่าใดเมื่อข้อมูลเรียงแล้ว",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(1)"
        },
        {
          "id": "b",
          "text": "Θ(log n)"
        },
        {
          "id": "c",
          "text": "Θ(n)"
        },
        {
          "id": "d",
          "text": "Θ(n²)"
        }
      ],
      "answer": "c",
      "explanation": "ตรวจสมาชิกแต่ละตัวครั้งเดียวโดยไม่มีการเลื่อนยาว"
    },
    {
      "id": "sorting_09",
      "type": "single_choice",
      "points": 1,
      "prompt": "merge sort แบบมาตรฐานมีเวลา worst case ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(log n)"
        },
        {
          "id": "b",
          "text": "Θ(n²)"
        },
        {
          "id": "c",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "d",
          "text": "Θ(n log n)"
        }
      ],
      "answer": "d",
      "explanation": "มี log n ระดับและรวมข้อมูล Θ(n) ต่อระดับ"
    },
    {
      "id": "sorting_18",
      "type": "single_choice",
      "points": 1,
      "prompt": "หลัง selection sort แบบเรียงเพิ่มผ่านไป k รอบแรก ข้อใดถูกต้อง",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "k ตำแหน่งแรกเป็นค่าใหญ่สุด"
        },
        {
          "id": "b",
          "text": "ยังไม่มีสมาชิกอยู่ตำแหน่งสุดท้าย"
        },
        {
          "id": "c",
          "text": "ข้อมูลทั้งหมดเรียงแล้วเสมอ"
        },
        {
          "id": "d",
          "text": "k ตำแหน่งแรกมี k ค่าน้อยสุดเรียงแล้ว"
        }
      ],
      "answer": "d",
      "explanation": "แต่ละรอบเลือกค่าน้อยสุดที่เหลือไว้ถัดจากส่วนที่เรียงแล้ว"
    },
    {
      "id": "sorting_12",
      "type": "single_choice",
      "points": 1,
      "prompt": "ข้อใดเป็น comparison sort",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "radix sort แบบมาตรฐาน"
        },
        {
          "id": "b",
          "text": "counting sort"
        },
        {
          "id": "c",
          "text": "merge sort"
        },
        {
          "id": "d",
          "text": "bucket sort ที่ใช้เฉพาะการนับ"
        }
      ],
      "answer": "c",
      "explanation": "merge sort เปรียบเทียบสมาชิกระหว่างการ merge"
    },
    {
      "id": "heap_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "ใน binary heap แบบอาร์เรย์ 0-based ที่มีสมาชิกอย่างน้อย 6 ตัว โหนดที่ index 5 มี parent ที่ index ใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "1"
        },
        {
          "id": "c",
          "text": "10"
        },
        {
          "id": "d",
          "text": "2"
        }
      ],
      "answer": "d",
      "explanation": "parent อยู่ที่ floor((5-1)/2)=2"
    },
    {
      "id": "heap_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "ฮีปแบบทวิภาคต้องมีรูปร่างอย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ต้นไม้ที่ทุกโหนดมีลูกสองคน"
        },
        {
          "id": "b",
          "text": "ต้นไม้ที่สูงเท่ากันทุกกิ่ง"
        },
        {
          "id": "c",
          "text": "binary search tree เสมอ"
        },
        {
          "id": "d",
          "text": "complete binary tree"
        }
      ],
      "answer": "d",
      "explanation": "complete binary tree เติมแต่ละระดับจากซ้ายไปขวา"
    },
    {
      "id": "recursion_17",
      "type": "single_choice",
      "points": 1,
      "prompt": "การคำนวณ Fibonacci แบบ recursion ตรง ๆ โดยไม่จำผลซ้ำ มีปัญหาใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "คำนวณปัญหาย่อยเดิมซ้ำหลายครั้ง"
        },
        {
          "id": "b",
          "text": "ไม่มีกรณีฐานได้เสมอ"
        },
        {
          "id": "c",
          "text": "ใช้เวลา O(1)"
        },
        {
          "id": "d",
          "text": "ไม่สามารถบวกตัวเลขได้"
        }
      ],
      "answer": "a",
      "explanation": "เช่น fib(3) ถูกเรียกซ้ำจากหลายเส้นทาง"
    },
    {
      "id": "graphs_10",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางที่เชื่อมต่อกันและไม่มีวงจรเรียกว่าอะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "กราฟสมบูรณ์เสมอ"
        },
        {
          "id": "b",
          "text": "ต้นไม้"
        },
        {
          "id": "c",
          "text": "กราฟสองส่วนที่ไม่เชื่อมต่อ"
        },
        {
          "id": "d",
          "text": "directed acyclic graph"
        }
      ],
      "answer": "b",
      "explanation": "ต้นไม้คือกราฟไม่มีทิศทางที่เชื่อมต่อและไม่มีวงจร"
    },
    {
      "id": "recursion_16",
      "type": "single_choice",
      "points": 1,
      "prompt": "ใน divide and conquer หากปัญหาย่อยเล็กพอจนแก้ได้โดยตรง จะเข้าสู่ขั้นใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "การหมุน AVL"
        },
        {
          "id": "b",
          "text": "การเรียกซ้ำไม่สิ้นสุด"
        },
        {
          "id": "c",
          "text": "การชนของ hash"
        },
        {
          "id": "d",
          "text": "กรณีฐาน"
        }
      ],
      "answer": "d",
      "explanation": "กรณีฐานยุติการแบ่งย่อยและตอบโดยตรง"
    },
    {
      "id": "sorting_15",
      "type": "single_choice",
      "points": 1,
      "prompt": "ลิสต์ [(2,A),(1,B),(2,C)] เรียงเพิ่มตามคีย์ด้วย stable sort ผลลัพธ์ใดถูกต้อง",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "[(1,B),(2,A),(2,C)]"
        },
        {
          "id": "b",
          "text": "[(2,A),(2,C),(1,B)]"
        },
        {
          "id": "c",
          "text": "[(1,B),(2,C),(2,A)]"
        },
        {
          "id": "d",
          "text": "[(2,C),(1,B),(2,A)]"
        }
      ],
      "answer": "a",
      "explanation": "A ต้องอยู่ก่อน C เพราะทั้งคู่มีคีย์ 2 และ A อยู่ก่อนเดิม"
    },
    {
      "id": "sorting_08",
      "type": "single_choice",
      "points": 1,
      "prompt": "selection sort แบบมาตรฐานเปรียบเทียบกี่ครั้งเมื่อมี 5 ตัว",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "8"
        },
        {
          "id": "b",
          "text": "5"
        },
        {
          "id": "c",
          "text": "25"
        },
        {
          "id": "d",
          "text": "10"
        }
      ],
      "answer": "d",
      "explanation": "เปรียบเทียบ 4+3+2+1=10 ครั้ง"
    },
    {
      "id": "greedydp_15",
      "type": "single_choice",
      "points": 1,
      "prompt": "DP สำหรับ coin change กำหนด dp[0]=0 เพราะเหตุใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ทำให้ทุกจำนวนเป็นไปไม่ได้"
        },
        {
          "id": "b",
          "text": "ต้องใช้เหรียญหนึ่งเหรียญเสมอ"
        },
        {
          "id": "c",
          "text": "เป็นจำนวนเหรียญที่มากที่สุด"
        },
        {
          "id": "d",
          "text": "จำนวนเงินศูนย์ไม่ต้องใช้เหรียญ"
        }
      ],
      "answer": "d",
      "explanation": "ยอดศูนย์เป็นกรณีฐานที่ใช้เหรียญศูนย์เหรียญ"
    },
    {
      "id": "sorting_10",
      "type": "single_choice",
      "points": 1,
      "prompt": "quick sort อาจเสื่อมเป็น Θ(n²) เมื่อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "มีสมาชิกเพียงตัวเดียว"
        },
        {
          "id": "b",
          "text": "แบ่งครึ่งเท่า ๆ กันทุกครั้ง"
        },
        {
          "id": "c",
          "text": "ใช้ merge รวมผล"
        },
        {
          "id": "d",
          "text": "แบ่งได้ขนาด 0 และ n-1 ซ้ำ ๆ"
        }
      ],
      "answer": "d",
      "explanation": "พาร์ทิชันที่ไม่สมดุลอย่างต่อเนื่องสร้างผลรวม n+(n-1)+..."
    },
    {
      "id": "heap_03",
      "type": "single_choice",
      "points": 1,
      "prompt": "ลบค่ารากจาก binary heap แล้วนำสมาชิกสุดท้ายขึ้นมาไว้ที่ราก ต้องซ่อมฮีปด้วยวิธีใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "reheap up"
        },
        {
          "id": "b",
          "text": "reheap down"
        },
        {
          "id": "c",
          "text": "binary search"
        },
        {
          "id": "d",
          "text": "inorder traversal"
        }
      ],
      "answer": "b",
      "explanation": "เลื่อนสมาชิกลงตามสมบัติฮีปจนลำดับถูกต้อง"
    },
    {
      "id": "searching_06",
      "type": "single_choice",
      "points": 1,
      "prompt": "binary search บนอาร์เรย์เรียงจากน้อยไปมาก แบบช่วงปิด [low, high] เมื่อค่าที่ mid น้อยกว่าเป้าหมาย ต้องปรับอย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "high=mid+1"
        },
        {
          "id": "b",
          "text": "low=mid-1"
        },
        {
          "id": "c",
          "text": "high=mid-1"
        },
        {
          "id": "d",
          "text": "low=mid+1"
        }
      ],
      "answer": "d",
      "explanation": "ตัดตำแหน่ง mid และช่วงทางซ้ายออก"
    },
    {
      "id": "greedydp_07",
      "type": "single_choice",
      "points": 1,
      "prompt": "วิธี tabulation มักสร้างคำตอบอย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เรียกซ้ำโดยไม่เก็บผล"
        },
        {
          "id": "b",
          "text": "เลือกคำตอบเฉพาะหน้าตลอดโดยไม่ดูสถานะ"
        },
        {
          "id": "c",
          "text": "คำนวณจากสถานะฐานไปยังสถานะที่ใหญ่ขึ้น"
        },
        {
          "id": "d",
          "text": "สุ่มสถานะโดยไม่กำหนดลำดับ"
        }
      ],
      "answer": "c",
      "explanation": "bottom-up เติมตารางจากปัญหาย่อยที่คำตอบพร้อมแล้ว"
    },
    {
      "id": "recursion_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดเป็นองค์ประกอบสำคัญในการออกแบบ recursion ที่สิ้นสุด",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "ห้ามส่งพารามิเตอร์"
        },
        {
          "id": "b",
          "text": "มีกรณีฐานที่หยุดเรียกซ้ำ"
        },
        {
          "id": "c",
          "text": "ต้องใช้ตัวแปร global เสมอ"
        },
        {
          "id": "d",
          "text": "แต่ละการเรียกคืบหน้าเข้าหากรณีฐาน"
        }
      ],
      "answer": [
        "b",
        "d"
      ],
      "explanation": "ต้องมีกฎหยุดและแต่ละขั้นต้องคืบหน้าไปถึงกฎนั้นได้"
    },
    {
      "id": "analysis_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "ลูปสองชั้นที่แต่ละชั้นทำ n รอบ โดยงานในชั้นในใช้เวลาคงที่ มีเวลาระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n²)"
        },
        {
          "id": "b",
          "text": "Θ(log n)"
        },
        {
          "id": "c",
          "text": "Θ(2ⁿ)"
        },
        {
          "id": "d",
          "text": "Θ(n)"
        }
      ],
      "answer": "a",
      "explanation": "จำนวนรอบทั้งหมดเป็น n×n"
    },
    {
      "id": "sorting_16",
      "type": "single_choice",
      "points": 1,
      "prompt": "bubble sort ที่มีตัวแปรตรวจว่าไม่มีการสลับในรอบหนึ่ง ควรทำอย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "หยุดเพราะข้อมูลเรียงแล้ว"
        },
        {
          "id": "b",
          "text": "เริ่มเรียงย้อนกลับ"
        },
        {
          "id": "c",
          "text": "เพิ่มข้อมูลใหม่"
        },
        {
          "id": "d",
          "text": "สลับคู่แรกเสมอ"
        }
      ],
      "answer": "a",
      "explanation": "หากไม่มีคู่ติดกันผิดลำดับ ลิสต์ก็เรียงแล้ว"
    },
    {
      "id": "searching_14",
      "type": "single_choice",
      "points": 1,
      "prompt": "การลบใน open addressing มักใช้ tombstone เพราะเหตุใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เพื่อให้ตารางเรียงลำดับ"
        },
        {
          "id": "b",
          "text": "เพื่อให้ทุกช่องว่างทันที"
        },
        {
          "id": "c",
          "text": "เพื่อไม่ตัดเส้นทาง probing ของคีย์ที่ชนกัน"
        },
        {
          "id": "d",
          "text": "เพื่อป้องกันคีย์ซ้ำทุกกรณี"
        }
      ],
      "answer": "c",
      "explanation": "ช่องที่เคยถูกใช้ต้องไม่ทำให้การค้นหาคีย์ซึ่งผ่านช่องนั้นหยุดก่อนเวลา"
    },
    {
      "id": "recursion_10",
      "type": "single_choice",
      "points": 1,
      "prompt": "หอคอยฮานอย 3 จาน ต้องย้ายอย่างน้อยกี่ครั้ง",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "7"
        },
        {
          "id": "c",
          "text": "8"
        },
        {
          "id": "d",
          "text": "6"
        }
      ],
      "answer": "b",
      "explanation": "จำนวนครั้งน้อยสุดคือ 2³-1=7"
    },
    {
      "id": "searching_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "binary search ใน [2, 4, 6, 8, 10] โดยใช้ index 0–4 และ mid=floor((low+high)/2) ตรวจค่าใดก่อน",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "8"
        },
        {
          "id": "b",
          "text": "2"
        },
        {
          "id": "c",
          "text": "4"
        },
        {
          "id": "d",
          "text": "6"
        }
      ],
      "answer": "d",
      "explanation": "mid=floor((0+4)/2)=2 ซึ่งมีค่า 6"
    },
    {
      "id": "sorting_05",
      "type": "single_choice",
      "points": 1,
      "prompt": "merge สองลิสต์เรียงเพิ่ม [1, 4] และ [2, 3] ได้ลำดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "[1, 2, 3, 4]"
        },
        {
          "id": "b",
          "text": "[2, 3, 1, 4]"
        },
        {
          "id": "c",
          "text": "[4, 3, 2, 1]"
        },
        {
          "id": "d",
          "text": "[1, 4, 2, 3]"
        }
      ],
      "answer": "a",
      "explanation": "เลือกค่าหน้าสุดที่น้อยกว่าจากแต่ละลิสต์ทีละตัว"
    },
    {
      "id": "recursion_02",
      "type": "single_choice",
      "points": 1,
      "prompt": "กำหนด F(1)=1 และ F(n)=n×F(n-1) เมื่อ n>1 ค่า F(4) เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "120"
        },
        {
          "id": "b",
          "text": "10"
        },
        {
          "id": "c",
          "text": "16"
        },
        {
          "id": "d",
          "text": "24"
        }
      ],
      "answer": "d",
      "explanation": "F(4)=4×3×2×1=24"
    },
    {
      "id": "recursion_12",
      "type": "single_choice",
      "points": 1,
      "prompt": "สมการ T(n)=2T(n/2)+Θ(n) และ T(1)=Θ(1) มีผลลัพธ์ระดับใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "Θ(n)"
        },
        {
          "id": "b",
          "text": "Θ(n²)"
        },
        {
          "id": "c",
          "text": "Θ(n log n)"
        },
        {
          "id": "d",
          "text": "Θ(log n)"
        }
      ],
      "answer": "c",
      "explanation": "มี log n ระดับและแต่ละระดับมีงานรวม Θ(n)"
    },
    {
      "id": "graphs_08",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟไม่มีทิศทางมีเส้นเชื่อม A-B, A-C, B-D และ C-E หากทำ BFS จาก A โดยเลือกจุดประชิดตามลำดับตัวอักษร ลำดับเยี่ยมชมคือข้อใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "A, B, D, C, E"
        },
        {
          "id": "b",
          "text": "A, B, C, D, E"
        },
        {
          "id": "c",
          "text": "A, C, E, B, D"
        },
        {
          "id": "d",
          "text": "A, D, B, E, C"
        }
      ],
      "answer": "b",
      "explanation": "BFS ใช้คิว: เริ่มที่ A ตามด้วย B และ C จากนั้นจึงเยี่ยม D และ E ตามลำดับ"
    },
    {
      "id": "graphs_15",
      "type": "single_choice",
      "points": 1,
      "prompt": "Dijkstra แบบมาตรฐานมีเงื่อนไขใดเกี่ยวกับน้ำหนักเส้นเชื่อม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ทุกเส้นต้องติดลบ"
        },
        {
          "id": "b",
          "text": "ทุกเส้นต้องเท่ากับ 1"
        },
        {
          "id": "c",
          "text": "น้ำหนักทุกเส้นต้องไม่ติดลบ"
        },
        {
          "id": "d",
          "text": "กราฟต้องไม่มีเส้นเชื่อม"
        }
      ],
      "answer": "c",
      "explanation": "Dijkstra แบบมาตรฐานรับประกันความถูกต้องเมื่อทุกน้ำหนักไม่ติดลบ รวมถึงน้ำหนัก 0; สไลด์ยกกรณีน้ำหนักบวกซึ่งเป็นกรณีย่อยที่ปลอดภัย"
    },
    {
      "id": "heap_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "แทรกสมาชิกที่มีค่าสูงกว่า root ของ max-heap จะเกิดอะไรขึ้นหลัง reheap up",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "รากเดิมถูกลบ"
        },
        {
          "id": "b",
          "text": "สมาชิกใหม่ขึ้นถึงราก"
        },
        {
          "id": "c",
          "text": "สมาชิกใหม่อยู่ใบเสมอ"
        },
        {
          "id": "d",
          "text": "จำนวนสมาชิกไม่เปลี่ยน"
        }
      ],
      "answer": "b",
      "explanation": "สมาชิกใหม่มากกว่าบรรพบุรุษทุกตัวจึงเลื่อนขึ้นถึงราก"
    },
    {
      "id": "greedydp_12",
      "type": "single_choice",
      "points": 1,
      "prompt": "optimal substructure หมายถึงอะไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เลือกคำตอบเฉพาะหน้าได้ถูกเสมอ"
        },
        {
          "id": "b",
          "text": "ทุกอินพุตมีคำตอบเดียว"
        },
        {
          "id": "c",
          "text": "ใช้หน่วยความจำ O(1) เสมอ"
        },
        {
          "id": "d",
          "text": "คำตอบเหมาะที่สุดสร้างได้จากคำตอบเหมาะที่สุดของปัญหาย่อยที่เกี่ยวข้อง"
        }
      ],
      "answer": "d",
      "explanation": "โครงสร้างของคำตอบเหมาะที่สุดอาศัยคำตอบเหมาะที่สุดของส่วนย่อย"
    },
    {
      "id": "graphs_01",
      "type": "multiple_choice",
      "points": 1,
      "prompt": "ข้อใดถูกต้องเกี่ยวกับการแทนกราฟ",
      "instructions": "เลือกคำตอบที่ถูกต้องทั้งหมด",
      "options": [
        {
          "id": "a",
          "text": "adjacency list ใช้พื้นที่ O(V+E)"
        },
        {
          "id": "b",
          "text": "adjacency matrix ต้องใช้พื้นที่ O(1)"
        },
        {
          "id": "c",
          "text": "adjacency list ห้ามใช้กับกราฟมีทิศทาง"
        },
        {
          "id": "d",
          "text": "adjacency matrix ใช้พื้นที่ O(V²)"
        }
      ],
      "answer": [
        "a",
        "d"
      ],
      "explanation": "เมทริกซ์เก็บ V×V ช่อง ส่วน adjacency list เก็บจุดยอดและรายการเส้นเชื่อม"
    },
    {
      "id": "greedydp_13",
      "type": "single_choice",
      "points": 1,
      "prompt": "เหรียญ 1 และ 3 เป้าหมาย 4 ใน DP แบบเหรียญไม่จำกัดจำนวน ค่า dp[4] ขั้นต่ำเท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "2"
        },
        {
          "id": "b",
          "text": "3"
        },
        {
          "id": "c",
          "text": "1"
        },
        {
          "id": "d",
          "text": "4"
        }
      ],
      "answer": "a",
      "explanation": "ใช้เหรียญ 3 และ 1 รวมสองเหรียญ"
    },
    {
      "id": "analysis_04",
      "type": "single_choice",
      "points": 1,
      "prompt": "สัญลักษณ์ Θ ใช้อธิบายขอบเขตอย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ขอบเขตบนเท่านั้น"
        },
        {
          "id": "b",
          "text": "ขอบเขตล่างเท่านั้น"
        },
        {
          "id": "c",
          "text": "ขอบเขตบนและล่างที่แน่นในอันดับเดียวกัน"
        },
        {
          "id": "d",
          "text": "เวลาที่วัดเป็นวินาทีแน่นอน"
        }
      ],
      "answer": "c",
      "explanation": "Θ ระบุทั้ง upper และ lower asymptotic bounds"
    },
    {
      "id": "graphs_14",
      "type": "single_choice",
      "points": 1,
      "prompt": "กราฟสามเหลี่ยมไม่มีทิศทางมีน้ำหนัก AB=1, BC=2, AC=4 น้ำหนักรวมของ MST เป็นเท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "3"
        },
        {
          "id": "b",
          "text": "6"
        },
        {
          "id": "c",
          "text": "5"
        },
        {
          "id": "d",
          "text": "7"
        }
      ],
      "answer": "a",
      "explanation": "เลือก AB และ BC รวม 1+2=3 โดยเชื่อมครบทุกจุด"
    },
    {
      "id": "searching_10",
      "type": "single_choice",
      "points": 1,
      "prompt": "hash table แบบ chaining แก้ collision อย่างไร",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "เก็บหลายคีย์ในโครงสร้างที่ช่องเดียวกัน"
        },
        {
          "id": "b",
          "text": "ทิ้งข้อมูลใหม่เสมอ"
        },
        {
          "id": "c",
          "text": "ย้ายคีย์ไปอาร์เรย์ที่เรียงแล้วเสมอ"
        },
        {
          "id": "d",
          "text": "ห้ามใช้ค่า hash ซ้ำ"
        }
      ],
      "answer": "a",
      "explanation": "แต่ละ bucket สามารถเก็บหลายรายการ เช่น ใน linked list"
    },
    {
      "id": "searching_13",
      "type": "single_choice",
      "points": 1,
      "prompt": "ตาราง hash มี 12 ช่องและเก็บ 9 รายการ load factor เท่าใด",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "0.25"
        },
        {
          "id": "b",
          "text": "3"
        },
        {
          "id": "c",
          "text": "1.33"
        },
        {
          "id": "d",
          "text": "0.75"
        }
      ],
      "answer": "d",
      "explanation": "load factor = n/m = 9/12"
    },
    {
      "id": "searching_18",
      "type": "single_choice",
      "points": 1,
      "prompt": "สมมติคีย์แต่ละตัวถูก hash ไปยังแต่ละช่องอย่างอิสระและมีโอกาสเท่ากัน ตารางมีขนาดคงที่ ข้อใดเพิ่มโอกาสที่คีย์ใหม่จะ hash ชนช่องซึ่งมีคีย์เดิม",
      "instructions": "เลือกคำตอบที่ถูกต้องที่สุดเพียงข้อเดียว",
      "options": [
        {
          "id": "a",
          "text": "ใช้ตารางว่าง"
        },
        {
          "id": "b",
          "text": "เพิ่มจำนวนช่องที่มีคีย์เดิม"
        },
        {
          "id": "c",
          "text": "ลบทุกคีย์"
        },
        {
          "id": "d",
          "text": "ลดจำนวนคีย์ที่เก็บ"
        }
      ],
      "answer": "b",
      "explanation": "ภายใต้ uniform hashing โอกาสที่คีย์ใหม่ชนช่องที่มีข้อมูลเพิ่มขึ้นตามจำนวนช่องที่ถูกใช้"
    }
  ]
}
```
