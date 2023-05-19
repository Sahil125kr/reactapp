from flask import Flask , request, jsonify,session ,url_for ,flash,json,Response,redirect
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS,cross_origin



app = Flask(__name__)
app.secret_key = "testing"


app.config['MONGO_URI']='mongodb://localhost:27017/reactwithpython'
mongo =PyMongo(app)


CORS(app)

db = mongo.db.users



#############  user insert code #################
@app.route("/useradd", methods=['POST', 'GET'])
def signup():
    if  request.method == 'POST':
        student_reg = mongo.db.student_reg
        id = student_reg.insert_one({
            'uid':request.json['uid'] ,
            'name': request.json['name'],
            'dateofbirth':request.json['dateofbirth'],
            'phone':request.json['phone'],
            'email': request.json['email'],
            'state':request.json['state'],
           
            
            'district':request.json['district'],
            
            'locality':request.json['locality'],
            'username':request.json['username'],

             
            'password': request.json['password'] })
    return jsonify({'msg':"Successfully Iserted Data"})




#############  user login##############


@app.route('/login', methods = ['GET', 'POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        student_reg = mongo.db.student_reg
        signin_user = student_reg.find_one({'username': request.json['username']})
        print("line no 96")

        if signin_user:
            print("line no 103")
            if request.json['password']==signin_user['password']:
                print("line no 105")
                session['username'] = request.json['username']
                
                print("line no 107")
                
                return  jsonify({"success":True})
            
        print("line no 109")

        flash('Username and password combination is wrong')
        print('line no 114')
        return json.dumps({'success':False}), 401, {'ContentType':'application/json'}


################   Coach Login######################


@app.route('/loginCoach', methods = ['GET', 'POST'])
@cross_origin()
def coach_login():
    if request.method == 'POST':
        coach_reg = mongo.db.coach_reg
        signin_user = coach_reg.find_one({'username': request.json['username']})
        print("line no 96")

        if signin_user:
            print("line no 103")
            if request.json['password']==signin_user['password']:
                print("line no 105")
                session['username'] = request.json['username']
                
                print("line no 107")
                
                return  jsonify({"success":True})
            
        print("line no 109")

        flash('Username and password combination is wrong')
        print('line no 114')
        return json.dumps({'success':False}), 401, {'ContentType':'application/json'}




############### coach  gridview code ######################


@app.route('/listusers',methods=['GET'])
def getData():
    print("hello")
    crud=[]
    for doc in mongo.db.coach_reg.find():
        crud.append({
            '_id':str(ObjectId(doc['_id'])),
            'fullname':doc['fullname'],
            'email':doc['email'],
            'experience':doc['experience'],
            'state':doc['state'],
            'locality':doc['locality'],
            'gender':doc['gender'],
            'username':doc['username'],
            'dateofbirth':doc['dateofbirth'],
            'phone':doc['phone'],
            'district':doc['district']
        })
    return jsonify(crud)




#################  coach Registration ##############



@app.route("/coachadd", methods=['POST', 'GET'])
def coach_add():
    if  request.method == 'POST':
        coach_reg = mongo.db.coach_reg
        id = coach_reg.insert_one({
            'fullname': request.json['fullname'],
            'email': request.json['email'],
            'experience':request.json['experience'],
            'state':request.json['state'],
            'locality':request.json['locality'],
            'gender':request.json['gender'] , 
            'username': request.json['username'],
            'dateofbirth':request.json['dateofbirth'],
            'phone':request.json['phone'],
            'district':request.json['district'] , 
            'password': request.json['password']  })
    return jsonify({'msg':"Successfully Iserted Data"})

################ coach update##################


@app.route('/userupdate/<id>',methods=['PUT'])
def updatedata(id):
    mongo.db.coach_reg.update_one({'_id': ObjectId(id)},{'$set':{
        'name':request.json['name'],
        'gender':request.json['gender']
        
    }})
    return jsonify({'msg':"Successfully UpdatedData"})



################## coach delete code #################


@app.route('/userdelete/<id>',methods=['DELETE'])
def deletedata(id):
    mongo.db.coach_reg.delete_one({'_id':ObjectId(id)})
    return jsonify({'msg': "Deleted successfully"})





################  student Registration #############


@app.route("/studentadd", methods=['POST', 'GET'])
def student_add():
    if  request.method == 'POST':
        student_reg = mongo.db.student_reg
        id = student_reg.insert_one({
            'coach_id':request.json['coach_id'],
            'coach_name':request.json['coach_name'],
            'student_id':request.json['student_id'],
            'fullname': request.json['fullname'],
            'email': request.json['email'],
            'height':request.json['height'],
            'weight':request.json['weight'],
            'state':request.json['state'],
            'locality':request.json['locality'],
            'gender':request.json['gender'] , 
            'username': request.json['username'],
            'dateofbirth':request.json['dateofbirth'],
            'phone':request.json['phone'],
            'district':request.json['district'] , 
            'password': request.json['password']  })
    return jsonify({'msg':"Successfully Iserted Data"})

#################   student grid ############


@app.route('/studentlist',methods=['GET'])
def studentData():
    print("hello")
    crud1=[]
    for doc in mongo.db.student_reg.find():
        crud1.append({
            '_id':str(ObjectId(doc['_id'])),
            'coach_id':doc['coach_id'],
            'coach_name':doc['coach_name'],
            'student_id':doc['student_id'],
            'fullname':doc['fullname'],
            
            'email':doc['email'],
            'height':doc['height'],
            'weight':doc['weight'],
            
            'state':doc['state'],
            'locality':doc['locality'],
            'gender':doc['gender'],
            'username':doc['username'],
            'dateofbirth':doc['dateofbirth'],
            'phone':doc['phone'],
            'district':doc['district']
        })
    return jsonify(crud1)

################## student grid ################


# @app.route('/studentlist',methods=['GET'])
# def getstudent():
#     print("hello")
#     crud1=[]
#     for doc in mongo.db.student_reg.find():
#         crud1.append({
#             '_id':str(ObjectId(doc['_id'])),
#             'coach_id':doc['coach_id'],
#             'coach_name':doc['coach_name'],
#             'fullname':doc['fullname'],
#             'email':doc['email'],
#             'height':doc['height'],
#             'weight':doc['weight'],
#             'state':doc['state'],
#             'locality':doc['locality'],
#             'gender':doc['gender'],
#             'username':doc['username'],
#             'dateofbirth':doc['dateofbirth'],
#             'phone':doc['phone'],
#             'district':doc['district']
#         })
#     return jsonify(crud1)


############### DElETE student###############


@app.route('/studentdelete/<id>',methods=['DELETE'])
def deletestudent(id):
    mongo.db.student_reg.delete_one({'_id':ObjectId(id)})
    return jsonify({'msg': "Deleted successfully"})


#############  admin login #############


@app.route('/loginAdmin', methods = ['GET', 'POST'])
@cross_origin()
def adminlogin():
    if request.method == 'POST':
        admin = mongo.db.admin
        signin_user = admin.find_one({'username': request.json['username']})
        print("line no 96")

        if signin_user:
            print("line no 103")
            if request.json['password']==signin_user['password']:
                print("line no 105")
                session['username'] = request.json['username']
                
                print("line no 107")
                
                return  jsonify({"success":True})
            
        print("line no 109")

        flash('Username and password combination is wrong')
        print('line no 114')
        return json.dumps({'success':False}), 401, {'ContentType':'application/json'}
    


########### insert workout in coach panel ############


@app.route("/workout", methods=['POST', 'GET'])
def workout():
    if  request.method == 'POST':
        workout_reg = mongo.db.workout_reg
        id = workout_reg.insert_one({
            'workout_id':request.json['workout_id'] ,
            'title': request.json['title'],
            'description':request.json['description']
            })
    return jsonify({'msg':"Successfully Inserted Data"})




################# upload videocoach #############


@app.route('/coachuploadvideo',methods=['GET'])
def coach_up_vd():
    print("hello")
    crud2=[]
    crud3=[]
    for doc in mongo.db.workout_reg.find():
        crud2.append({
            '_id':str(ObjectId(doc['_id'])),
            
            'title':doc['title'],


        })
        # result = db.student_reg.findOne({"student_id"},{"student_id":1});
        # for doc in mongo.db.student_reg.find({"student_id":{"$in":result["student_id"]}}):
        for doc in mongo.db.student_reg.find( { 'student_id': "wecoach_S001"}):
            crud3.append({
            '_id':str(ObjectId(doc['_id'])),
            
            'fullname':doc['fullname']


            })
        return jsonify(crud3)
            





    return jsonify(crud2)








####################  fetch data #################

# @app.route('/loginAdmin', methods = ['GET', 'POST'])
# @cross_origin()
# def adminlogin():
#     if request.method == 'POST':
#         admin = mongo.db.admin
#         signin_user = admin.find_one({'username': request.json['username']})
#         print("line no 96")

#         if signin_user:
#             print("line no 103")
#             if request.json['password']==signin_user['password']:
#                 print("line no 105")
#                 session['username'] = request.json['username']
                
#                 print("line no 107")
                
#                 return  jsonify({"success":True})
            
#         print("line no 109")

#         flash('Username and password combination is wrong')
#         print('line no 114')
#         return json.dumps({'success':False}), 401, {'ContentType':'application/json'}




# @app.route('/CoachUploadVideo/<id>',methods = ['PUT'])
# def userupdate(id):
#     user = student_reg.query.get(id)
 
#     name = request.json['name']
#     email = request.json['email']
 
#     user.name = name
#     user.email = email
 
#     db.session.commit()
#     return user_schema.jsonify(user)











































if __name__ == '__main__':
    app.run(debug=True)
