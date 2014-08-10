class GroupsController < ApplicationController
  # GET /groups
  # GET /groups.json
  def index
    @groups = Group.all

    render json: @groups
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
    @group = Group.find(params[:id])

    render json: @group
  end

  # POST /groups
  # POST /groups.json
  def create
    @group = Group.new(params[:group])

    if @group.save
      render json: @group, status: :created, location: @group
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    @group = Group.find(params[:id])

    if @group.update(params[:group])
      head :no_content
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group = Group.find(params[:id])
    @group.destroy

    head :no_content
  end
end
