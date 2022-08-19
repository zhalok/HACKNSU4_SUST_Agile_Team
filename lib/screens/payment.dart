import 'package:flutter/material.dart';
class MakePayment extends StatefulWidget {
  const MakePayment({Key? key}) : super(key: key);

  @override
  State<MakePayment> createState() => _MakePaymentState();
}

class _MakePaymentState extends State<MakePayment> {
  
  final List<String> item = <String>['Parabat Express Class:S_Chair', 'Jayantika Express Class:S_Chair'];
  //final List<int> position = <int>[600, 500, 100];

  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: ListView.separated(
      itemBuilder: (context, position) {
            return Card(
              child: Padding(
                padding: const EdgeInsets.all(15.0),
                child: Text(
                  'Parabat Express Class:S_Chair $position',
                 
                ),
                
              ),
            );
          },
          separatorBuilder: (context, position) {
            return Card(
              color: Colors.grey,
              child: Padding(
                padding: const EdgeInsets.all(5.0),
                child: Text(
                  'Jayantika Express Class:S_Chair $position',
                  style: const TextStyle(color: Colors.white),
                  
                ),
              ),
            );
          },
          itemCount: 2,
      )
    );
  }
}