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
    return MaterialApp(
      title: 'E-Ticket',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.green),
      darkTheme: ThemeData(primarySwatch: Colors.grey),
      color: Colors.amberAccent,
      home: Scaffold(
        appBar: AppBar(title: const Text('E-Ticket',style: TextStyle(color: Colors.black),)),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              DropdownButton(
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
            ),
            SizedBox(
                  height: 50,
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
              SizedBox(
                  height: 50,
                ),
             
            ],
          ),
        ),
      ),
    );
  }
}
