// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
void main(){
  runApp(const MyApp());
}
class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String dropdownvalue = 'Dhaka';  
 
  
  var items = [   
    'Dhaka',
    'Sylhet',
    'Chittagong',
    'Rajshahi',
    'Khulna',
    'Mymensingh'
  ];
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(10),
      decoration:const BoxDecoration(
    color: Colors.white,
    borderRadius: BorderRadius.only(
      topLeft: Radius.circular(10),
        topRight: Radius.circular(10),
        bottomLeft: Radius.circular(10),
        bottomRight: Radius.circular(10)
    ),
      ),
      child:  Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            DropdownButton(
              isExpanded: false,
              value: dropdownvalue,
              icon: const Icon(Icons.keyboard_arrow_down),
              items: items.map((String items) {
                return DropdownMenuItem(
                  value: items,
                  child: Text(items),
                );
              }).toList(),
              onChanged: (String? newValue) {
                setState(() {
                  dropdownvalue = newValue!;
                });
              },
              hint: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "From",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              ),
              DropdownButton(
              isExpanded: false,
              value: dropdownvalue,
              icon: const Icon(Icons.keyboard_arrow_down),
              items: items.map((String items) {
                return DropdownMenuItem(
                  value: items,
                  child: Text(items),
                );
              }).toList(),
              onChanged: (String? newValue) {
                setState(() {
                  dropdownvalue = newValue!;
                });
              },
              hint: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  "To",
                  style: TextStyle(color: Colors.black),
                ),
              ),
              ),
              
          ],
        ),
      ),
    );
  }
}